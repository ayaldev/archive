var grinding=[
    [1.00, 1.04, 1.08, 1.12, 1.17, 1.22, 1.27, 1.32, 1.38, 1.44, 1.50],  // 1
    [1.00, 1.04, 1.08, 1.12, 1.17, 1.22, 1.27, 1.32, 1.38, 1.44, 1.50],  // 2
    [1.00, 1.04, 1.08, 1.12, 1.17, 1.22, 1.27, 1.32, 1.38, 1.44, 1.50],  // 3
    [1.00, 1.04, 1.08, 1.12, 1.17, 1.22, 1.29, 1.36, 1.44, 1.52, 1.60],  // 4
    [1.00, 1.04, 1.08, 1.12, 1.17, 1.22, 1.29, 1.36, 1.44, 1.52, 1.60],  // 5
    [1.00, 1.04, 1.08, 1.12, 1.17, 1.22, 1.29, 1.36, 1.44, 1.52, 1.60],  // 6
    [1.00, 1.04, 1.09, 1.15, 1.22, 1.29, 1.37, 1.45, 1.54, 1.64, 1.75],  // 7
    [1.00, 1.04, 1.09, 1.15, 1.22, 1.29, 1.37, 1.45, 1.54, 1.64, 1.75],  // 8
    [1.00, 1.04, 1.09, 1.15, 1.22, 1.29, 1.37, 1.45, 1.54, 1.64, 1.75],  // 9
    [1.00, 1.04, 1.09, 1.15, 1.22, 1.30, 1.40, 1.50, 1.62, 1.75, 1.90],  // 10
    [1.00, 1.05, 1.11, 1.18, 1.26, 1.35, 1.45, 1.56, 1.68, 1.81, 1.95],  // 11
    [1.00, 1.06, 1.13, 1.21, 1.30, 1.40, 1.50, 1.61, 1.73, 1.86, 2.00],  // 12
    [1.00, 1.04, 1.08, 1.12, 1.16, 1.20, 1.24, 1.28, 1.32, 1.36, 1.40]]  // 13

var initdata={
    // 初期値
    p_atk:1760,
    e_def:315,
    e_p_r:1,
    w_atk:950,
    w_el:50,
    e_el_r:1,
    p_r:1.05,
    p_crc_r:1,
    p_crc:5,
    p_dex:500,
    pa_dex_r:1,
    e_dex:414,
    w_rarity:10,
    w_plus:10,
    w_b_type:0
}

var parameters = new Vue({
    el:'#parameters',
    data:{},
    computed:{
        // 基礎倍率
        _r:function(){
            return this.e_p_r/5*this.p_r;
        },
        // 素手ダメージ
        bare:function(){
            return this.p_atk*this._r;
        },
        // エネミー防御力によるダメージ（マイナス）
        edef:function(){
            return -this.e_def*this._r;
        },
        // 属性ダメージ
        wele:function(){
            return this.w_atk*this.w_el*0.01*this.e_el_r/5*this.p_r;
        },
        // 武器最小ダメージ
        wmin:function(){
            
            // 武器90%と武器10%
            var upperlimit = this.wmax*0.9;
            var lowerlimit = this.wmax*0.1;
            
            // レアで非クラフトの場合は武器90%
            if (this.w_rarity>=7 && this.w_b_type==0)
                return upperlimit;
            
            // それ以外
            var w_dexadjust=0;
            
            if (this.w_b_type<=1)
                w_dexadjust=50*(grinding[this.w_rarity-1][this.w_plus]-1);
            if (this.w_b_type==2)
                w_dexadjust=50+100*(grinding[this.w_rarity-1][this.w_plus]-1);
            if (this.w_b_type==3)
                w_dexadjust=100+150*(grinding[this.w_rarity-1][this.w_plus]-1);
            if (this.w_b_type==4)
                w_dexadjust=150+200*(grinding[this.w_rarity-1][this.w_plus]-1);
            if (this.w_b_type==5)
                w_dexadjust=-50;
            
            // 保証値計算
            var safety=(this.p_dex*this.pa_dex_r-this.e_dex+w_dexadjust)*2*this._r;
            
            // 最小ダメージは武器90%以下武器10%以上
            return Math.max(lowerlimit,Math.min(upperlimit,safety));
            
        },
        // 武器最大ダメージ
        wmax:function(){
            return this.w_atk*this._r;
        },
        // 武器以外ダメージ
        nwmax:function(){
            return this.bare+this.wele+this.edef
        },
        // クリティカル倍率を抜いた最大ダメージ
        pmax:function(){
            return this.bare+this.wele+this.wmax+this.edef;
        },
        // 最大ダメージ
        max:function(){
            return Math.round(this.pmax*this.p_crc_r);
        },
        // 最小ダメージ
        min:function(){
            return Math.round(this.bare+this.wele+this.wmin+this.edef);
        },
        // 期待値
        mean: function() {
            var mid=(this.pmax+this.min)/2;
            return Math.round(mid+this.p_crc*0.01*(this.max-mid));
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    PSOD.preparation();
}, false);

var PSOD = {
    buta: '(´・ω・｀)',

    initialize: function() {
        this.Dataset.append();
    },

    preparation: function() {
        d3.select('#result svg').attr('height', '72');
        PSOD.initialize();
    }
};

PSOD.Dataset={
    signature: '(ﾟAﾟ) PSOD',
    current: null,
    map: d3.map(),

    makeId: function() {
        return 'g-' + Math.random().toString(36).slice(-10);
    },

    getCurrent: function() {
        if (this.current) {
            return this.current;
        }

        return this.getFormData(this.current);
    },

    select: function(dataset) {
        if (this.current && dataset.id !== this.current.id) {
            this.current.summaryCache = PSOD.Util.summary();
        }

        this.map.forEach(function(k, v) {
            v.selected = false;
        });

        dataset.expire = false;
        dataset.selected = true;
        this.current = dataset;

        //this.loadFormData(dataset);
    },

    append:function(){
        var dataset = {};

        dataset.id = this.makeId();
        dataset.name = PSOD.buta;

        if (this.map.size()) {
            var max = d3.max(this.map.values(), function(d) { return d.order; });
            dataset.order = isNaN(max) ? 0 : max + 1;
        }
        else {
            dataset.order = 0;
        }

        parameters.$data=initdata;

        this.map.set(dataset.id, dataset);
        this.select(dataset);

    }
};

var dataList = [10, 30, 5, 60, 40, 78, 56, 30, 24, 80,90];
var svgWidth = 640;	// SVG領域の横幅
var svgHeight = 800;	// SVG領域の縦幅
var barScale = 3;	// 2倍サイズで描画
var yBarSize = 18;	// 棒グラフの縦幅
var svg = d3.select("#result").append("svg")
	.attr("width", svgWidth).attr("height", svgHeight)
// 目盛りを表示するためにスケールを設定
var xScale = d3.scale.linear()	// スケールを設定
		.domain([0, 100])	// 元のサイズ
		.range([0, 100*barScale]);	// 実際の出力サイズ
// 目盛りを設定し表示する
/*svg.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(8, "+dataList.length*yBarSize+")")
	.call(d3.svg.axis()
		.scale(xScale)	//スケールを適用する
		.orient("bottom")	//目盛りの表示位置を下側に指定
	);
    
    var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
*/
svg.selectAll("rect")	// SVGでの四角形を示す要素を指定
	.data(dataList)	// データを設定
	.enter()
	.append("rect")	// SVGでの四角形を示す要素を生成
	.attr("x", 0)	// 横棒グラフなのでX座標は0。これはSVG上での座標
	.attr("y", function(d,i){	// Y座標を配列の順序に応じて計算
		return i * yBarSize;
	})
	.attr("width", function(d){	// 横幅を配列の内容に応じて計算
		return (d*barScale) +"px";
	})
	.attr("height", "16")	// 棒グラフの高さを指定
	.attr("style", "fill:rgb(255,0,0)")	// 棒グラフの色を赤色に設定
	.attr("transform", "translate(8, 0)")
// ボタンにイベントを割り当て
document.getElementById("add").onclick = function(){
	var n = Math.floor(Math.random() * 90) + 10;
	//dataList.shift();	// 配列をシフトし先頭データを削除
	dataList.push(n);	// 末尾に乱数値を追加
    // データを更新する処理
	svg.selectAll("rect")	// SVGでの四角形を示す要素を指定
		.data(dataList)	// データを設定
        .attr("x", 0)	// 横棒グラフなのでX座標は0。これはSVG上での座標
        .attr("y", function(d,i){	// Y座標を配列の順序に応じて計算
            return i * yBarSize;
        })
        .attr("width", function(d){	// 横幅を配列の内容に応じて計算
            return (d*barScale) +"px";
        })
        .attr("height", "16")	// 棒グラフの高さを指定
        .attr("style", "fill:rgb(255,0,0)")	// 棒グラフの色を赤色に設定
        .attr("transform", "translate(8, 0)");
    svg.attr("height", dataList.length*yBarSize);

}