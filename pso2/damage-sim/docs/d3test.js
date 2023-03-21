// グラフ用配列
var dl=[];
// id検索用連想配列
var searchdl={};

function saveURL(){
    return true;
}

function addGraph(){
    var min = Math.floor(Math.random() * 50) + 10;
    var max = Math.floor(Math.random() * 50) + 60;
    var id = 'g-' + Math.random().toString(36).slice(-10);
    searchdl[id] = {id:id,name:"(´・ω・｀)",min:min,max:max};
    dl.push(searchdl[id]);	// 末尾に乱数値を追加
    // データを更新する処理
    d3.select("#result").selectAll("section")
        .data(dl,function(d){ return d.id })
        .enter()
        .append('section')
        .call(function(parent) {
            parent.append("button")
                .attr("style","width:30px;height:20px;")
                .on("click",function(d){ alert(d.min); })
                .text("　　");
            parent.append("button")
                .attr("style","width:30px;height:20px;")
                .on("click",function(d){
                    
                    if (confirm("(´・ω・｀)処す？処す？")){
                        dl.splice(Object.keys(searchdl).indexOf(d.id),1);
                        delete searchdl[d.id];
                        
                        d3.select("#result").selectAll("section")
                            .data(dl,function(d2){ return d2.id })
                            .exit().remove();                        
                    }
                })
                .text("×");
            parent.append("p")
                .text(function(d) { return d.name; })
                .attr("id",function(d) { return d.id; })
                .on("click",function(d){
                    var newname = window.prompt("名前を入力～", d.name);
                    if (newname != "" && newname != null){
                        $("#"+d.id).html(newname);
                        searchdl[id]['name']=newname;
                    }
                });
            parent.append("div")
                .attr("style",function(d){ return "height:20px;width:"+d.min*5+"px;"})
                .attr("class",'min')
                .on("click",function(d){
                    var newdata = window.prompt("(´・ω・｀)", d.min);
                    if (newdata != "" && newdata != null){
                        searchdl[id]['min']=newdata;
                        updateGraph();
                    }
                })
                .text(function(d) { return d.min; });
            parent.append("div")
                .attr("style",function(d){ return "height:20px;width:"+(d.max-d.min)*5+"px;"})
                .attr("class",'max')
                .text(function(d) { return d.max; });
        });
}

function updateGraph(){
    var dMax = d3.max(dl,function(d){
        return d.max;
    });
    var xscale = d3.scaleLinear()
        .domain([0, dMax])
        .range([0, 400]);
        
    d3.select("#result").selectAll("section")
        .data(dl,function(d){ return d.id })
        .call(function(parent) {
            parent.select("div")
                .attr("style",function(d){
                    return "height:20px;width:"+xscale(d.min)+"px;"
                })
                .text(function(d) { return d.min; });
        });
}