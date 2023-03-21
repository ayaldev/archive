var atktypes = ['melee','ranged','pet','technic']

var InitData = {
    atktype:0,
    nazo:1.05,
    p_atk:1500,
    p_dex:500,
    c_hit_r:5,
    
    w_atk:1000,
    w_elm:60,
    w_p1:0,
    w_p1_t:0,
    w_p2:0,
    w_p2_t:0,
    w_p3:0,
    w_p3_t:0,
    w_p4:0,
    w_p4_t:0,
    w_type:0,
    w_rarity:13,
    w_plus:10,
    w_bluetype:0,
    
    e_def:315,
    e_dex:414,
    e_pt_r:1.0,
    e_ept_r:1.0,
    any_r:1.0,
    pa_r:100,
    pa_dex_r:1.0,
    p_rg1:1.0,
    p_rg1_t:0,
    p_rg2:1.0,
    p_rg2_t:0,
    p_skills:[],
    ja:1.0
};
// コンポーネント
// タグの省略に利用。スライダーとテキストボックス、値タイプを指定するセレクトボックスをセットにする
var range_text=Vue.extend({
    template:'\
        <div><h4>{{name}}</h4>\
            <input ref="input" :name="id" type="range" :step="step" :max="max" :min="min" :value="value" v-on:input="updateValue($event.target)">\
            <input ref="input" :name="id" type="text" :value="value" v-on:change="updateValue($event.target)">\
            <select v-if="wp" :value="value" :name="wp" v-on:change="updateValue($event.target)">\
                <option value="0">倍率</option>\
                <option value="1">固定</option>\
                <option value="2">C倍率</option>\
            </select>\
        </div>',
    props:['id','name','value','step','max','min','wp'],
    // 指定されたidに値を代入する
    methods:{
        updateValue:function(event){
            this.$root[event.name] = event.value;
        }
    }
});

var param = new Vue({
    el: '#param',
    components:{
        'renge-text':range_text
    },
    methods:{
        getSkill:function(event){
            var sid = event.target.name;
            var slv = $('[name='+sid+']:checked').val();
            this.paramaters.p_skills.some(function(v,i,arr){
                if (v.id==sid)
                    arr.splice(i,1);
            });
            
            this.paramaters.p_skills.push({id:sid,lv:slv});
        },
        classSkills:function(className){
            var k = base_skills.filter(function(skill){
                return (skill.class == className);
            });
            
            return k;
        },
        existSkills:function(skillid){
            return this.paramaters.p_skills.filter(function(el){
                return el.id == skillid;
            });
        },
        getSkillEf:function(id,level){
            var efs = skills.get(id)[atktypes[this.paramaters.atktype]];
            var val;
            // オブジェクトの種類で倍率系や加算系などの条件を分岐する
            switch (Object.prototype.toString.call(efs[0]).slice(8, -1)){
                case 'String':
                    if (level == 0)
                        val = '0';
                    else
                        val = efs[level-1];
                    break;
                case 'Number':
                    if (level == 0)
                        val = 1;
                    else
                        val = 1+efs[level-1]*0.01;
                    break;
                case 'Array':
                    if (level == 0)
                        val = 1;
                    else
                        val = [1+efs[level-1][0]*0.01];
                    break;
                case 'Function':
                    if (level == 0)
                        val = 1;
                    else
                        val = efs[level-1];
                    break;
            }
            
            return val;
        },
        getSkillEfString:function(id,level){
            var mark = '';
            var val = this.getSkillEf(id,level);
            
            // オブジェクトの種類で倍率系や加算系などの条件を分岐する
            switch (Object.prototype.toString.call(val).slice(8, -1)){
                case 'String':
                    mark = '＋';
                    break;
                case 'Number':
                    mark = '×';
                    break;
                case 'Array':
                    mark = 'C×';
                    break;
                case 'Function':
                    mark = '＊';
                    break;
            }
                
            return mark + val;
        }
    },
    computed:{
        summary_p:function(){
            return '攻撃力 ' + this.paramaters.p_atk + Array(3).join('　')
                    + '技量合計 ' + this.paramaters.p_dex + Array(3).join('　')
                    + 'クリティカル率 ' + this.paramaters.c_hit_r + '%';
        },
        summary_w:function(){
            var potentials = {0:1.00,1:0,2:1.00};
            var tmp = [{type:this.paramaters.w_p1_t,value:this.paramaters.w_p1},
                        {type:this.paramaters.w_p2_t,value:this.paramaters.w_p2},
                        {type:this.paramaters.w_p3_t,value:this.paramaters.w_p3},
                        {type:this.paramaters.w_p4_t,value:this.paramaters.w_p4}];
            
            for (var v of tmp){
                if (v.type == 1)
                    potentials[1] += parseInt(v.value);
                else
                    potentials[v.type] *= (1 + v.value * 0.01); 
            }
            
            return '攻撃力 ' + this.paramaters.w_atk
                    + ' 属性値 ' + this.paramaters.w_elm
                    + ' 倍率 ×' + potentials[0].toFixed(2)
                    + ' 固定値 ＋' + potentials[1]
                    + ' C倍率 ×' + potentials[2].toFixed(2);
        },
        summary_e:function(){return '';},
        summary_any:function(){return '';},
        summary_skill:function(){return '';},
        all_r:function(){
            var r = this.paramaters.nazo;
            var ef;
            r *= this.paramaters.ja;
            
            for (var v of this.paramaters.p_skills){
                
                ef = this.getSkillEf(v.id,v.lv);
                
                // オブジェクトの種類で倍率系や加算系などの条件を分岐する
                if (Object.prototype.toString.call(ef).slice(8, -1) == 'Number'){
                    r = Math.multiply(r, ef);
                }
            }
            
            return r;
        },
        all_cr:function(){
            return 1.00;
        },
        // 基礎倍率
        _r:function(){
            return this.paramaters.e_pt_r/5*this.all_r;
        },
        // 素手ダメージ
        bare:function(){
            return this.paramaters.p_atk*this._r;
        },
        // エネミー防御力によるダメージ（マイナス）
        edef:function(){
            return -this.paramaters.e_def*this._r;
        },
        // 属性ダメージ
        wele:function(){
            return this.paramaters.w_atk*this.paramaters.w_elm*0.01*this.paramaters.e_ept_r/5*this.paramaters.e_pt_r;
        },
        // 武器最小ダメージ
        wmin:function(){
            
            // 武器90%と武器10%
            var upperlimit = this.wmax*0.9;
            var lowerlimit = this.wmax*0.1;
            
            // レアで非クラフトの場合は武器90%
            if (this.paramaters.w_rarity>=7 && this.paramaters.w_bluetype==0)
                return upperlimit;
            
            // それ以外
            var w_dexadjust=0;
            
            if (this.w_bluetype<=1)
                w_dexadjust=50*(grinding[this.paramaters.w_rarity-1][this.paramaters.w_plus]-1);
            if (this.w_bluetype==2)
                w_dexadjust=50+100*(grinding[this.paramaters.w_rarity-1][this.paramaters.w_plus]-1);
            if (this.w_bluetype==3)
                w_dexadjust=100+150*(grinding[this.paramaters.w_rarity-1][this.paramaters.w_plus]-1);
            if (this.w_bluetype==4)
                w_dexadjust=150+200*(grinding[this.paramaters.w_rarity-1][this.paramaters.w_plus]-1);
            if (this.w_bluetype==5)
                w_dexadjust=-50;
            
            // 保証値計算
            var safety=(this.paramaters.p_dex*this.paramaters.pa_dex_r-this.paramaters.e_dex+w_dexadjust)*2*this._r;
            
            // 最小ダメージは武器90%以下武器10%以上
            return Math.max(lowerlimit,Math.min(upperlimit,safety));
            
        },
        // 武器最大ダメージ
        wmax:function(){
            return this.paramaters.w_atk*this._r;
        },
        // クリティカル倍率を抜いた最大ダメージ
        pmax:function(){
            return this.bare+this.wele+this.wmax+this.edef;
        },
        // 最大ダメージ
        max:function(){
            return Math.round(this.pmax*this.all_cr);
        },
        // 最小ダメージ
        min:function(){
            return Math.round(this.bare+this.wele+this.wmin+this.edef);
        },
        // 期待値
        mean: function() {
            var mid=(this.pmax+this.min)/2;
            return Math.round(mid+this.paramaters.c_hit_r*0.01*(this.max-mid));
        }
    },
    data: {
        paramaters:{
            atktype:0,
            nazo:1.05,
            p_atk:1500,
            p_dex:500,
            c_hit_r:5,
            
            w_atk:1000,
            w_elm:60,
            w_p1:0,
            w_p1_t:0,
            w_p2:0,
            w_p2_t:0,
            w_p3:0,
            w_p3_t:0,
            w_p4:0,
            w_p4_t:0,
            w_type:0,
            w_rarity:13,
            w_plus:10,
            w_bluetype:0,
            
            e_def:315,
            e_dex:414,
            e_pt_r:1.0,
            e_ept_r:1.0,
            any_r:1.0,
            pa_r:100,
            pa_dex_r:1.0,
            p_rg1:1.0,
            p_rg1_t:0,
            p_rg2:1.0,
            p_rg2_t:0,
            p_skills:[],
            ja:1.0
        },
        
        navigators:[
            {
                name:'Hu',
                color:'E4405F'
            },
            {
                name:'Fi',
                color:'C6225F'
            },
            {
                name:'Ra',
                color:'5D4F9C'
            },
            {
                name:'Gu',
                color:'4EB8D8'
            },
            {
                name:'Fo',
                color:'C6C750'
            },
            {
                name:'Te',
                color:'D57C41'
            },
            {
                name:'Br',
                color:'30B841'
            },
            {
                name:'Bo',
                color:'99D732'
            },
            {
                name:'Su',
                color:'E45EAB'
            }
        ]
    }
});
