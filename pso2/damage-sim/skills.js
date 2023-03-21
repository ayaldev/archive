function skills(){
    this.hasskills={};
}

skills.prototype={
    getskill:function(classname,skillname,level){return this.hasskills[classname][skillname]=level;}
};
//ハンタースキル
skills.Hu=(function(){
    function Hu(){}
    Hu.FURYS={
        name:'フューリースタンス',
        melee:[10,11,12,13,14,15,16,17,18,20],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Hu.FSUP1={
        name:'フューリーSアップ1',
        melee:[1,2,3,4,5],
        ranged:[1,2,3,4,5],
        pet:[0,0,0,0,0],
        technic:[0,0,0,0,0]
    };
    Hu.FSUP2={
        name:'フューリーSアップ2',
        melee:[1,2,3,4,5],
        ranged:[1,2,3,4,5],
        pet:[0,0,0,0,0],
        technic:[0,0,0,0,0]
    };
    Hu.JAB1={
        name:'JAボーナス1',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Hu.JAB2={
        name:'JAボーナス2',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Hu.FCMB={
        name:'フューリーコンボアップ',
        melee:[5,10],
        ranged:[5,10],
        pet:[5,10],
        technic:[5,10]
    };
    Hu.WBR={
        name:'ウォーブレイブ',
        melee:[5,8,10,12,15],
        ranged:[5,8,10,12,15],
        pet:[5,8,10,12,15],
        technic:[5,8,10,12,15]
    };
    Hu.NVRG={
        name:'ネバーギブアップ',
        melee:['200','220','240','260','300'],
        ranged:['0','0','0','0','0'],
        pet:['0','0','0','0','0'],
        technic:['0','0','0','0','0']
    };
    
    return Hu;
})();

//ファイタースキル
skills.Fi=(function(){
    function Fi(){}
    Fi.BRVS={
        name:'ブレイブスタンス',
        melee:[5,7,9,12,15,17,19,21,23,25],
        ranged:[5,7,9,12,15,17,19,21,23,25],
        pet:[5,7,9,12,15,17,19,21,23,25],
        technic:[5,7,9,12,15,17,19,21,23,25]
    };
    Fi.BRVSUP={
        name:'ブレイブSアップ',
        melee:[2,4,6,8,10,12,14,16,18,20],
        ranged:[2,4,6,8,10,12,14,16,18,20],
        pet:[2,4,6,8,10,12,14,16,18,20],
        technic:[2,4,6,8,10,12,14,16,18,20]
    };
    Fi.WISES={
        name:'ワイズスタンス',
        melee:[15,17,19,22,25,27,29,31,33,35],
        ranged:[15,17,19,22,25,27,29,31,33,35],
        pet:[15,17,19,22,25,27,29,31,33,35],
        technic:[15,17,19,22,25,27,29,31,33,35]
    };
    Fi.WISESUP={
        name:'ワイズSアップ',
        melee:[2,4,6,8,10,12,14,18,24,30],
        ranged:[2,4,6,8,10,12,14,18,24,30],
        pet:[2,4,6,8,10,12,14,18,24,30],
        technic:[2,4,6,8,10,12,14,18,24,30]
    };
    Fi.LMTBRK={
        name:'リミットブレイク',
        melee:[4,8,12,16,20],
        ranged:[0,0,0,0,0],
        pet:[0,0,0,0,0],
        technic:[0,0,0,0,0]
    };
    Fi.CRIST={
        name:'クリティカルストライク',
        melee:[[3],[6],[9],[12],[15]],
        ranged:[[3],[6],[9],[12],[15]],
        pet:[[3],[6],[9],[12],[15]],
        technic:[[3],[6],[9],[12],[15]]
    };
    Fi.TAJAB={
        name:'テックアーツJAボーナス',
        melee:[5,6,8,10,15],
        ranged:[5,6,8,10,15],
        pet:[5,6,8,10,15],
        technic:[5,6,8,10,15]
    };
    Fi.HALFLS={
        name:'ハーフラインスレイヤー',
        melee:['20','22','24','26','28','34','40','60','80','100'],
        ranged:['20','22','24','26','28','34','40','60','80','100'],
        pet:['20','22','24','26','28','34','40','60','80','100'],
        technic:['20','22','24','26','28','34','40','60','80','100']
    };
    Fi.DEADLS={
        name:'デッドラインスレイヤー',
        melee:['40','44','49','54','60','67','75','100','125','150'],
        ranged:['40','44','49','54','60','67','75','100','125','150'],
        pet:['40','44','49','54','60','67','75','100','125','150'],
        technic:['40','44','49','54','60','67','75','100','125','150']
    };
    Fi.PPLS={
        name:'PPスレイヤー',
        melee:['50','65','80','95','110','125','140','155','170','200'],
        ranged:['50','65','80','95','110','125','140','155','170','200'],
        pet:['50','65','80','95','110','125','140','155','170','200'],
        technic:['50','65','80','95','110','125','140','155','170','200']
    };
    Fi.CRZYBT={
        name:'クレイジービート',
        melee:['100','120','140','160','200'],
        ranged:['0','0','0','0','0'],
        pet:['0','0','0','0','0'],
        technic:['0','0','0','0','0']
    };
    Fi.CHASEADV={
        name:'チェイスアドバンス',
        melee:[10,11,12,13,15,17,19,21,23,25],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Fi.CHASEPLS={
        name:'チェイスアドバンスプラス',
        melee:[5,7,9,11,15],
        ranged:[5,7,9,11,15],
        pet:[5,7,9,11,15],
        technic:[5,7,9,11,15]
    };
    return Fi;
})();

//レンジャースキル
skills.Ra=(function(){
    function Ra(){}
    Ra.WHADV1={
        name:'ウィークヒットアドバンス1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[6,7,9,11,14,17,21,25,30,35],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Ra.WHADV2={
        name:'ウィークヒットアドバンス2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[6,7,9,11,14,17,21,25,30,35],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Ra.STSNP1={
        name:'スタンディングスナイプ1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Ra.STSNP2={
        name:'スタンディングスナイプ2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Ra.FSTHT={
        name:'ファーストヒット',
        melee:[4,8,12,16,20],
        ranged:[4,8,12,16,20],
        pet:[4,8,12,16,20],
        technic:[4,8,12,16,20]
    };
    Ra.SHPST={
        name:'シャープシューター',
        melee:[5,8,11,15,20],
        ranged:[5,8,11,15,20],
        pet:[5,8,11,15,20],
        technic:[5,8,11,15,20]
    };
    Ra.MVSNP={
        name:'ムービングスナイプ',
        melee:[0,0,0,0,0],
        ranged:[1,2,3,4,5],
        pet:[0,0,0,0,0],
        technic:[0,0,0,0,0]
    };
    return Ra;
})();
//ガンナースキル
skills.Gu=(function(){
    function Gu(){}
    Gu.HT={
        name:'ハイタイム',
        melee:[10,15,20],
        ranged:[10,15,20],
        pet:[10,15,20],
        technic:[10,15,20]
    };
    Gu.ZERORGADV1={
        name:'ゼロレンジアドバンス1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Gu.ZERORGADV2={
        name:'ゼロレンジアドバンス2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Gu.PK={
        name:'パーフェクトキーパー',
        melee:[10,11,12,13,14,15,16,17,18,20],
        ranged:[10,11,12,13,14,15,16,17,18,20],
        pet:[10,11,12,13,14,15,16,17,18,20],
        technic:[10,11,12,13,14,15,16,17,18,20]
    };
    Gu.AIRADV={
        name:'エアリアルアドバンス',
        melee:[2,4,6,8,10,12,14,16,18,20],
        ranged:[2,4,6,8,10,12,14,16,18,20],
        pet:[2,4,6,8,10,12,14,16,18,20],
        technic:[2,4,6,8,10,12,14,16,18,20]
    };
    Gu.SRJAB={
        name:'SロールJAボーナス',
        melee:[2,4,6,8,10],
        ranged:[2,4,6,8,10],
        pet:[2,4,6,8,10],
        technic:[2,4,6,8,10]
    };
    Gu.TMGMSTRY={
        name:'Tマシンガンマスタリー',
        melee:[[1],[2],[3],[4],[5]],
        ranged:[[1],[2],[3],[4],[5]],
        pet:[[1],[2],[3],[4],[5]],
        technic:[[1],[2],[3],[4],[5]]
    };
    return Gu;
})();

//フォーススキル
skills.Fo=(function(){
    function Fo(){}
    Fo.ELMTCVT={
        name:'エレメントコンバージョン',
        melee:[0,0,0,0],
        ranged:[0,0,0,0],
        pet:[0,0,0,0],
        technic:[12.5,15,25,30],
        label:['不一致50','不一致60','一致50','一致60']
    };
    Fo.TTB={
        name:'タリステックボーナス',
        melee:[0,0,0,0],
        ranged:[0,0,0,0,0],
        pet:[0,0,0,0,0],
        technic:[4,8,12,16,20]
    };
    Fo.TECHJAADV={
        name:'テックJAアドバンス',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[1,2,3,4,5,6,7,8,9,10]
    };
    Fo.TECHCHGADV1={
        name:'テックチャージアドバンス1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[1,2,3,4,5,6,7,8,9,10]
    };
    Fo.TECHCHGADV2={
        name:'テックチャージアドバンス2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[1,2,3,4,5,6,7,8,9,10]
    };
    Fo.NORTECHADV={
        name:'ノーマルテックアドバンス',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[1,2,3,4,5,6,7,8,9,10]
    };
    Fo.PF={
        name:'フォトンフレア',
        melee:['0','0','0','0','0','0','0','0','0','0'],
        ranged:['0','0','0','0','0','0','0','0','0','0'],
        pet:['20','40','60','80','100','120','140','160','180','200'],
        technic:['20','40','60','80','100','120','140','160','180','200']
    };
    Fo.PFADV={
        name:'フォトンフレアアドバンス',
        melee:['0','0','0','0','0','0','0','0','0','0'],
        ranged:['0','0','0','0','0','0','0','0','0','0'],
        pet:['20','40','60','80','100','120','140','160','180','200'],
        technic:['20','40','60','80','100','120','140','160','180','200']
    };
    Fo.PFAFTBST={
        name:'フォトンフレアアフターバースト',
        melee:['0'],
        ranged:['0'],
        pet:['100'],
        technic:['100']
    };
    Fo.ELMMSTRY1={
        name:'属性マスタリー1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[5,6,7,8,9,10,12,14,16,20]
    };
    Fo.ELMMSTRY2={
        name:'属性マスタリー2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[5,6,7,8,9,10,12,14,16,20]
    };
    return Fo;
})();
//テクタースキル
skills.Te=(function(){
    function Te(){}
    Te.SST={
        name:'シフタストライク',
        melee:[2,4,6,8,10],
        ranged:[2,4,6,8,10],
        technic:[2,4,6,8,10]
    };
    Te.WNDLVS={
        name:'ウォンドラバーズ',
        melee:[5,8,11,14,18,22,26,30,35,40],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    };
    Te.WNDRCTR={
        name:'ウォンドリアクター',
        melee:[['20'],['25'],['30'],['35'],['40']],
        ranged:[['00'],['00'],['00'],['00'],['00']],
        technic:[['00'],['00'],['00'],['00'],['00']]
    };
    Te.EWH={
        name:'エレメントウィークヒット',
        melee:[2,4,6,8,10,12,14,16,18,20],
        ranged:[2,4,6,8,10,12,14,16,18,20],
        technic:[2,4,6,8,10,12,14,16,18,20]
    };
    Te.ELMMSTRY1={
        name:'属性マスタリー1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        technic:[5,6,7,8,9,10,12,14,16,20]
    };
    Te.ELMMSTRY2={
        name:'属性マスタリー2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        technic:[5,6,7,8,9,10,12,14,16,20]
    };
    return Te;
})();
//ブレイバースキル
skills.Br=(function(){
    function Br(){}
    Br.AVRGS={
        name:'アベレージスタンス',
        melee:[1,2,3,4,5,7,9,11,13,15],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        technic:[1,2,3,4,5,7,9,11,13,15]
    };
    Br.WEAKS={
        name:'ウィークスタンス',
        melee:[3,6,9,12,15,18,21,25,30,35],
        ranged:[3,6,9,12,15,18,21,25,30,35],
        technic:[3,6,9,12,15,18,21,25,30,35]
    };
    Br.STUP={
        name:'スタンスアップ',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        technic:[1,2,3,4,5,6,7,8,9,10]
    };
    Br.STCHG={
        name:'スタンスチャージ',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        technic:[1,2,3,4,5,6,7,8,9,10]
    };
    Br.RPDSHTMSTRY={
        name:'ラピッドシュートマスタリー',
        melee:[5,7,9,12,15],
        ranged:[5,7,9,12,15],
        technic:[5,7,9,12,15]
    };
    Br.RPDSHTUP1={
        name:'ラピッドシュートアップ1',
        melee:['0','0','0','0','0'],
        ranged:['100','120','140','160','200'],
        technic:['0','0','0','0','0']
    };
    Br.RPDSHTUP2={
        name:'ラピッドシュートアップ2',
        melee:['0','0','0','0','0'],
        ranged:['100','140','180','240','300'],
        technic:['0','0','0','0','0']
    };
    Br.ATKADV={
        name:'アタックアドバンス',
        melee:[10,20,30,40,50],
        ranged:[10,20,30,40,50],
        technic:[0,0,0,0,0]
    };
    return Br;
})();
//バウンサースキル
skills.Bo=(function(){
    function Bo(){}
    Bo.CRFTMSTRY={
        name:'クラフトマスタリー',
        melee:function(n){return [1,2,3,4,5,6,7,8,9,10](n)},
        ranged:function(n){return [1,2,3,4,5,6,7,8,9,10](n)},
        technic:function(n){return [1,2,3,4,5,6,7,8,9,10](n)}
    };
    Bo.SAIRATKBST={
        name:'シフタエアアタックブースト',
        melee:[1,2,3,4,5],
        ranged:[1,2,3,4,5],
        technic:[1,2,3,4,5]
    };
    Bo.RPDBSTJAB={
        name:'ラピッドブーストJAボーナス',
        melee:[5,6,8,11,15],
        ranged:[5,6,8,11,15],
        technic:[5,6,8,11,15]
    };
    Bo.ELMNTS={
        name:'エレメンタルスタンス',
        melee:[1,2,3,4,5,8,11,14,17,20],
        ranged:[1,2,3,4,5,8,11,14,17,20],
        technic:[1,2,3,4,5,8,11,14,17,20]
    };
    Bo.BRKS={
        name:'ブレイクスタンス',
        melee:[3,5,9,12,15,19,23,27,31,35],
        ranged:[3,5,9,12,15,19,23,27,31,35],
        technic:[3,5,9,12,15,19,23,27,31,35]
    };
    Bo.BSSDB={
        name:'ブレイクSDボーナス',
        melee:[3,5,9,12,15,19,23,27,31,35],
        ranged:[3,5,9,12,15,19,23,27,31,35],
        technic:[3,5,9,12,15,19,23,27,31,35]
    };
    Bo.STUP={
        name:'スタンスアップ',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        technic:[1,2,3,4,5,6,7,8,9,10]
    };
    return Bo;
})();
//サモナースキル
skills.Su=(function(){
    function Su(){}
    Su.ALLATKB1={
        name:'オールアタックボーナス1',
        melee:[1,3,5,7,10],
        ranged:[1,3,5,7,10],
        pet:[1,3,5,7,10],
        technic:[1,3,5,7,10]
    };
    Su.ALLATKB2={
        name:'オールアタックボーナス2',
        melee:[1,3,5,7,10],
        ranged:[1,3,5,7,10],
        pet:[1,3,5,7,10],
        technic:[1,3,5,7,10]
    };
    /*Su.ALLATKUP={
        name:'全攻撃アップ',
        melee:['20','25','30','35','50'],
        ranged:['20','25','30','35','50'],
        pet:['20','25','30','35','50'],
        technic:['20','25','30','35','50']
    };
    Su.ALLATKHUP={
        name:'全攻撃ハイアップ',
        melee:['20','25','30','35','50','65','80','100','120','150'],
        ranged:['20','25','30','35','50','65','80','100','120','150'],
        pet:['20','25','30','35','50','65','80','100','120','150'],
        technic:['20','25','30','35','50','65','80','100','120','150']
    };*/
    Su.PETELMTWKHT={
        name:'ペットエレメントウィークヒット',
        melee:[1,2,3,4,5],
        ranged:[1,2,3,4,5],
        pet:[6,7,8,9,10],
        technic:[1,2,3,4,5]
    };
    Su.ALTREGO={
        name:'アルターエゴ',
        melee:[0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0],
        pet:[5,10,15,16,17,18,19,20],
        technic:[0,0,0,0,0,0,0,0]
    };
    Su.PNTASIST={
        name:'ポイントアシスト',
        melee:[0],
        ranged:[0],
        pet:[15],
        technic:[0]
    };
    Su.SPTFIRE={
        name:'サポートファイア',
        melee:[0],
        ranged:[0],
        pet:[10],
        technic:[0]
    };
    Su.PETSYMPSY={
        name:'ペットシンパシー',
        melee:[0],
        ranged:[0],
        pet:[10],
        technic:[0]
    };
    return Su;
})();