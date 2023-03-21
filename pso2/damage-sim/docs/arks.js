function arks(){
}

//ステ基礎値
arks.bareatk=552.3;

//種族ごとの上昇量
//ﾋｭｰﾏﾝ男、ﾋｭｰﾏﾝ女、ﾆｭｰﾏﾝ男、ﾆｭｰﾏﾝ女、ｷｬｽﾄ男、ｷｬｽﾄ女、ﾃﾞｭｰﾏﾝ男、ﾃﾞｭｰﾏﾝ女の順
arks.type_growth_rate={
        melee:[4,0,0,0,5,4,7,6],
        ranged:[3,3,2,2,4,5,4,5],
        magic:[0,4,8,10,-4,-4,5,5]
};

//クラスごとの上昇量
//Hu、Fi、Ra、Gu、Fo、Te、Br、Bo、Suの順
arks.class_growth_rate={
        melee:[9,9,0,0,-15,0,1,1,1],
        ranged:[0,-15,9,9,0,-15,1,-13,1],
        magic:[-15,0,-15,-15,9,9,-13,1,1]
};

arks.calcattack=function(type,mf,mainclass,subclass,atktype){
    var maingr=arks.class_growth_rate[atktype][mainclass];
    var subgr=arks.class_growth_rate[atktype][subclass];
    var typegr=arks.type_growth_rate[atktype][parseInt(type)+parseInt(mf)];
    
	return Math.ceil(arks.bareatk*(130+maingr+subgr/5)/130*(100+typegr)/100);
};

$('.help_arksstatus').on('change',function () {
    var atktype=$("input[name='common_attacktype']:checked").val();
    
    if (atktype=='pet' || atktype=='technic')
        atktype='magic';

    $('#help_arksstatus').val(arks.calcattack($('#help_arkstype').val(),$('#help_arkssex').val(),$('#help_mainclass').val(),$('#help_subclass').val(),atktype));
});
