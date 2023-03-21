﻿// クラスとスキル
// 追加された場合ここに記述
// スキルの書き方
// 打撃→melee,射撃→ranged,ペット→pet,テクニック→technic
// 通常倍率→数値(例:1),ステータス加算→文字列(例:'1'),クリティカル倍率→配列(例:[1]),特殊→関数()
var skills = new Map();
var base_skills=[
    {
        id:'ja',
        class:'Co',
        name:'ジャストアタック',
        melee:[30],
        ranged:[30],
        pet:[0],
        technic:[30],
        label:['あり']
    },
    {
        id:'ub',
        class:'Co',
        name:'アルティメットバスター',
        melee:[10],
        ranged:[10],
        pet:[0],
        technic:[10],
        label:['あり']
    },
    {
        id:'wp',
        class:'Co',
        name:'ウェポンブースト',
        melee:[2.5,5,7.5,10],
        ranged:[2.5,5,7.5,10],
        pet:[0,0,0,0],
        technic:[2.5,5,7.5,10]
    },
    {
        id:'wk',
        class:'Co',
        name:'ウィークバレット',
        melee:[20,155],
        ranged:[20,155],
        pet:[20,155],
        technic:[20,155],
        label:['ジャミング','通常']
    },
    {
        id:'hs',
        class:'Hu',
        name:'ヒューリースタンス',
        melee:[10,11,12,13,14,15,16,17,18,20],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'h1',
        class:'Hu',
        name:'ヒューリーSアップ1',
        melee:[1,2,3,4,5],
        ranged:[1,2,3,4,5],
        pet:[0,0,0,0,0],
        technic:[0,0,0,0,0]
    },
    {
        id:'h2',
        class:'Hu',
        name:'ヒューリーSアップ2',
        melee:[1,2,3,4,5],
        ranged:[1,2,3,4,5],
        pet:[0,0,0,0,0],
        technic:[0,0,0,0,0]
    },
    {
        id:'j1',
        class:'Hu',
        name:'JAボーナス1',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'j2',
        class:'Hu',
        name:'JAボーナス2',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'cu',
        class:'Hu',
        name:'ヒューリーコンボアップ',
        melee:[1,2,3,4,5,10],
        ranged:[1,2,3,4,5,10],
        pet:[0,0,0,0,0,0],
        technic:[1,2,3,4,5,10]
    },
    {
        id:'wb',
        class:'Hu',
        name:'ウォーブレイブ',
        melee:[5,8,10,12,15],
        ranged:[5,8,10,12,15],
        pet:[5,8,10,12,15],
        technic:[5,8,10,12,15]
    },
    {
        id:'ng',
        class:'Hu',
        name:'ネバーギブアップ',
        melee:['200','220','240','260','300'],
        ranged:['0','0','0','0','0'],
        pet:['0','0','0','0','0'],
        technic:['0','0','0','0','0']
    },
    {
        id:'bs',
        class:'Fi',
        name:'ブレイブスタンス',
        melee:[5,7,9,12,15,17,19,21,23,25],
        ranged:[5,7,9,12,15,17,19,21,23,25],
        pet:[5,7,9,12,15,17,19,21,23,25],
        technic:[5,7,9,12,15,17,19,21,23,25]
    },
    {
        id:'bu',
        class:'Fi',
        name:'ブレイブSアップ',
        melee:[2,4,6,8,10,12,14,16,18,20],
        ranged:[2,4,6,8,10,12,14,16,18,20],
        pet:[2,4,6,8,10,12,14,16,18,20],
        technic:[2,4,6,8,10,12,14,16,18,20]
    },
    {
        id:'ws',
        class:'Fi',
        name:'ワイズスタンス',
        melee:[15,17,19,22,25,27,29,31,33,35],
        ranged:[15,17,19,22,25,27,29,31,33,35],
        pet:[15,17,19,22,25,27,29,31,33,35],
        technic:[15,17,19,22,25,27,29,31,33,35]
    },
    {
        id:'wu',
        class:'Fi',
        name:'ワイズSアップ',
        melee:[2,4,6,8,10,12,14,18,24,30],
        ranged:[2,4,6,8,10,12,14,18,24,30],
        pet:[2,4,6,8,10,12,14,18,24,30],
        technic:[2,4,6,8,10,12,14,18,24,30]
    },
    {
        id:'lb',
        class:'Fi',
        name:'リミットブレイク',
        melee:[4,8,12,16,20],
        ranged:[0,0,0,0,0],
        pet:[0,0,0,0,0],
        technic:[0,0,0,0,0]
    },
    {
        id:'cs',
        class:'Fi',
        name:'クリティカルストライク',
        melee:[[3],[6],[9],[12],[15]],
        ranged:[[3],[6],[9],[12],[15]],
        pet:[[3],[6],[9],[12],[15]],
        technic:[[3],[6],[9],[12],[15]]
    },
    {
        id:'ta',
        class:'Fi',
        name:'テックアーツJAボーナス',
        melee:[5,6,8,10,15],
        ranged:[5,6,8,10,15],
        pet:[5,6,8,10,15],
        technic:[5,6,8,10,15]
    },
    {
        id:'hl',
        class:'Fi',
        name:'ハーフラインスレイヤー',
        melee:['20','22','24','26','28','34','40','60','80','100'],
        ranged:['20','22','24','26','28','34','40','60','80','100'],
        pet:['20','22','24','26','28','34','40','60','80','100'],
        technic:['20','22','24','26','28','34','40','60','80','100']
    },
    {
        id:'dl',
        class:'Fi',
        name:'デッドラインスレイヤー',
        melee:['40','44','49','54','60','67','75','100','125','150'],
        ranged:['40','44','49','54','60','67','75','100','125','150'],
        pet:['40','44','49','54','60','67','75','100','125','150'],
        technic:['40','44','49','54','60','67','75','100','125','150']
    },
    {
        id:'pp',
        class:'Fi',
        name:'PPスレイヤー',
        melee:['50','65','80','95','110','125','140','155','170','200'],
        ranged:['50','65','80','95','110','125','140','155','170','200'],
        pet:['50','65','80','95','110','125','140','155','170','200'],
        technic:['50','65','80','95','110','125','140','155','170','200']
    },
    {
        id:'cb',
        class:'Fi',
        name:'クレイジービート',
        melee:['100','120','140','160','200'],
        ranged:['0','0','0','0','0'],
        pet:['0','0','0','0','0'],
        technic:['0','0','0','0','0']
    },
    {
        id:'ca',
        class:'Fi',
        name:'チェイスアドバンス',
        melee:[10,11,12,13,15,17,19,21,23,25],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'cp',
        class:'Fi',
        name:'チェイスアドバンスプラス',
        melee:[5,7,9,11,15],
        ranged:[5,7,9,11,15],
        pet:[5,7,9,11,15],
        technic:[5,7,9,11,15]
    },
    {
        id:'w1',
        class:'Ra',
        name:'ウィークヒットアドバンス1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[6,7,9,11,14,17,21,25,30,35],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'w2',
        class:'Ra',
        name:'ウィークヒットアドバンス2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[6,7,9,11,14,17,21,25,30,35],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'s1',
        class:'Ra',
        name:'スタンディングスナイプ1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'s2',
        class:'Ra',
        name:'スタンディングスナイプ2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'fs',
        class:'Ra',
        name:'ファーストヒット',
        melee:[4,8,12,16,20],
        ranged:[4,8,12,16,20],
        pet:[4,8,12,16,20],
        technic:[4,8,12,16,20]
    },
    {
        id:'ss',
        class:'Ra',
        name:'シャープシューター',
        melee:[5,8,11,15,20],
        ranged:[5,8,11,15,20],
        pet:[5,8,11,15,20],
        technic:[5,8,11,15,20]
    },
    {
        id:'ms',
        class:'Ra',
        name:'ムービングスナイプ',
        melee:[0,0,0,0,0],
        ranged:[1,2,3,4,5],
        pet:[0,0,0,0,0],
        technic:[0,0,0,0,0]
    },
    {
        id:'z1',
        class:'Gu',
        name:'ゼロレンジアドバンス1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'z2',
        class:'Gu',
        name:'ゼロレンジアドバンス2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'ht',
        class:'Gu',
        name:'ハイタイム',
        melee:[10,15,20],
        ranged:[10,15,20],
        pet:[10,15,20],
        technic:[10,15,20]
    },
    {
        id:'pk',
        class:'Gu',
        name:'パーフェクトキーパー',
        melee:[10,11,12,13,14,15,16,17,18,20],
        ranged:[10,11,12,13,14,15,16,17,18,20],
        pet:[10,11,12,13,14,15,16,17,18,20],
        technic:[10,11,12,13,14,15,16,17,18,20]
    },
    {
        id:'aa',
        class:'Gu',
        name:'エアリアルアドバンス',
        melee:[2,4,6,8,10,12,14,16,18,20],
        ranged:[2,4,6,8,10,12,14,16,18,20],
        pet:[2,4,6,8,10,12,14,16,18,20],
        technic:[2,4,6,8,10,12,14,16,18,20]
    },
    {
        id:'sj',
        class:'Gu',
        name:'SロールJAボーナス',
        melee:[2,4,6,8,10],
        ranged:[2,4,6,8,10],
        pet:[0,0,0,0,0],
        technic:[2,4,6,8,10]
    },
    {
        id:'tm',
        class:'Gu',
        name:'Tマシンガンマスタリー',
        melee:[[1],[2],[3],[4],[5]],
        ranged:[[1],[2],[3],[4],[5]],
        pet:[[0],[0],[0],[0],[0]],
        technic:[[1],[2],[3],[4],[5]]
    },
    {
        id:'t1',
        class:'Fo',
        name:'テックチャージアドバンス1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[1,2,3,4,5,6,7,8,9,10]
    },
    {
        id:'t2',
        class:'Fo',
        name:'テックチャージアドバンス2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[1,2,3,4,5,6,7,8,9,10]
    },
    {
        id:'ec',
        class:'Fo',
        name:'エレメントコンバージョン',
        melee:[0,0,0,0],
        ranged:[0,0,0,0],
        pet:[0,0,0,0],
        technic:[12.5,15,25,30],
        label:['不一致50','不一致60','一致50','一致60']
    },
    {
        id:'tt',
        class:'Fo',
        name:'タリステックボーナス',
        melee:[0,0,0,0],
        ranged:[0,0,0,0,0],
        pet:[0,0,0,0,0],
        technic:[4,8,12,16,20]
    },
    {
        id:'tj',
        class:'Fo',
        name:'テックJAアドバンス',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[1,2,3,4,5,6,7,8,9,10]
    },
    {
        id:'nt',
        class:'Fo',
        name:'ノーマルテックアドバンス',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[1,2,3,4,5,6,7,8,9,10]
    },
    {
        id:'pf',
        class:'Fo',
        name:'フォトンフレア',
        melee:['0','0','0','0','0','0','0','0','0','0'],
        ranged:['0','0','0','0','0','0','0','0','0','0'],
        pet:['20','40','60','80','100','120','140','160','180','200'],
        technic:['20','40','60','80','100','120','140','160','180','200']
    },
    {
        id:'fa',
        class:'Fo',
        name:'フォトンフレアアドバンス',
        melee:['0','0','0','0','0','0','0','0','0','0'],
        ranged:['0','0','0','0','0','0','0','0','0','0'],
        pet:['20','40','60','80','100','120','140','160','180','200'],
        technic:['20','40','60','80','100','120','140','160','180','200']
    },
    {
        id:'pb',
        class:'Fo',
        name:'フォトンフレアアフターバースト',
        melee:['0'],
        ranged:['0'],
        pet:['100'],
        technic:['100']
    },
    {
        id:'f1',
        class:'Fo',
        name:'属性マスタリー1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[5,6,7,8,9,10,12,14,16,20]
    },
    {
        id:'f2',
        class:'Fo',
        name:'属性マスタリー2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[5,6,7,8,9,10,12,14,16,20]
    },
    {
        id:'t2',
        class:'Te',
        name:'属性マスタリー1',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[5,6,7,8,9,10,12,14,16,20]
    },
    {
        id:'t2',
        class:'Te',
        name:'属性マスタリー2',
        melee:[0,0,0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        pet:[0,0,0,0,0,0,0,0,0,0],
        technic:[5,6,7,8,9,10,12,14,16,20]
    },
    {
        id:'ts',
        class:'Te',
        name:'シフタストライク',
        melee:[2,4,6,8,10],
        ranged:[2,4,6,8,10],
        technic:[2,4,6,8,10]
    },
    {
        id:'wl',
        class:'Te',
        name:'ウォンドラバーズ',
        melee:[5,8,11,14,18,22,26,30,35,40],
        ranged:[0,0,0,0,0,0,0,0,0,0],
        technic:[0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:'wr',
        class:'Te',
        name:'ウォンドリアクター',
        melee:[['20'],['25'],['30'],['35'],['40']],
    },
    {
        id:'ew',
        class:'Te',
        name:'エレメントウィークヒット',
        melee:[2,4,6,8,10,12,14,16,18,20],
        ranged:[2,4,6,8,10,12,14,16,18,20],
        pet:[2,4,6,8,10,12,14,16,18,20],
        technic:[2,4,6,8,10,12,14,16,18,20]
    },
    {
        id:'as',
        class:'Br',
        name:'アベレージスタンス',
        melee:[1,2,3,4,5,7,9,11,13,15],
        ranged:[1,2,3,4,5,7,9,11,13,15],
        pet:[1,2,3,4,5,7,9,11,13,15],
        technic:[1,2,3,4,5,7,9,11,13,15]
    },
    {
        id:'ws',
        class:'Br',
        name:'ウィークスタンス',
        melee:[3,6,9,12,15,18,21,25,30,35,-5],
        ranged:[3,6,9,12,15,18,21,25,30,35,-5],
        pet:[3,6,9,12,15,18,21,25,30,35,-5],
        technic:[3,6,9,12,15,18,21,25,30,35,-5],
        label:['3','6','9','12','15','18','21','25','30','35','非弱点']
    },
    {
        id:'ru',
        class:'Br',
        name:'スタンスアップ',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        pet:[1,2,3,4,5,6,7,8,9,10],
        technic:[1,2,3,4,5,6,7,8,9,10]
    },
    {
        id:'sc',
        class:'Br',
        name:'スタンスチャージ',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        pet:[1,2,3,4,5,6,7,8,9,10],
        technic:[1,2,3,4,5,6,7,8,9,10]
    },
    {
        id:'rm',
        class:'Br',
        name:'ラピッドシュートマスタリー',
        melee:[5,7,9,12,15],
        ranged:[5,7,9,12,15],
        pet:[5,7,9,12,15],
        technic:[5,7,9,12,15]
    },
    {
        id:'r1',
        class:'Br',
        name:'ラピッドシュートアップ1',
        melee:['0','0','0','0','0'],
        ranged:['100','120','140','160','200'],
        pet:['0','0','0','0','0'],
        technic:['0','0','0','0','0']
    },
    {
        id:'r2',
        class:'Br',
        name:'ラピッドシュートアップ2',
        melee:['0','0','0','0','0'],
        ranged:['100','140','180','240','300'],
        pet:['0','0','0','0','0'],
        technic:['0','0','0','0','0']
    },
    {
        id:'aa',
        class:'Br',
        name:'アタックアドバンス',
        melee:[10,20,30,40,50],
        ranged:[10,20,30,40,50],
        pet:[10,20,30,40,50],
        technic:[0,0,0,0,0]
    },
    {
        id:'es',
        class:'Bo',
        name:'エレメンタルスタンス',
        melee:[1,2,3,4,5,8,11,14,17,20],
        ranged:[1,2,3,4,5,8,11,14,17,20],
        pet:[1,2,3,4,5,8,11,14,17,20],
        technic:[1,2,3,4,5,8,11,14,17,20]
    },
    {
        id:'ks',
        class:'Bo',
        name:'ブレイクスタンス',
        melee:[3,5,9,12,15,19,23,27,31,35],
        ranged:[3,5,9,12,15,19,23,27,31,35],
        pet:[3,5,9,12,15,19,23,27,31,35],
        technic:[3,5,9,12,15,19,23,27,31,35]
    },
    {
        id:'ou',
        class:'Bo',
        name:'スタンスアップ',
        melee:[1,2,3,4,5,6,7,8,9,10],
        ranged:[1,2,3,4,5,6,7,8,9,10],
        pet:[1,2,3,4,5,6,7,8,9,10],
        technic:[1,2,3,4,5,6,7,8,9,10]
    },
    {
        id:'te',
        class:'Bo',
        name:'シフタエアアタックブースト',
        melee:[1,2,3,4,5],
        ranged:[1,2,3,4,5],
        pet:[1,2,3,4,5],
        technic:[1,2,3,4,5]
    },
    {
        id:'pu',
        class:'Bo',
        name:'フォトンブレードフィーバーアップ',
        melee:[5,10,15,20,30],
        ranged:[0,0,0,0,0],
        pet:[0,0,0,0,0],
        technic:[0,0,0,0,0]
    },
    {
        id:'rj',
        class:'Bo',
        name:'ラピッドブーストJAボーナス',
        melee:[5,6,8,11,15],
        ranged:[5,6,8,11,15],
        pet:[0,0,0,0,0],
        technic:[5,6,8,11,15]
    },
    {
        id:'sd',
        class:'Bo',
        name:'ブレイクSDボーナス',
        melee:[3,5,9,12,15,19,23,27,31,35]
    },
    {
        id:'a1',
        class:'Su',
        name:'オールアタックボーナス1',
        melee:[1,3,5,7,10],
        ranged:[1,3,5,7,10],
        pet:[1,3,5,7,10],
        technic:[1,3,5,7,10]
    },
    {
        id:'a2',
        class:'Su',
        name:'オールアタックボーナス2',
        melee:[1,3,5,7,10],
        ranged:[1,3,5,7,10],
        pet:[1,3,5,7,10],
        technic:[1,3,5,7,10]
    },
    {
        id:'pe',
        class:'Su',
        name:'ペットエレメントウィークヒット',
        melee:[1,2,3,4,5],
        ranged:[1,2,3,4,5],
        pet:[6,7,8,9,10],
        technic:[1,2,3,4,5]
    },
    {
        id:'ae',
        class:'Su',
        name:'アルターエゴ',
        melee:[0,0,0,0,0,0,0,0],
        ranged:[0,0,0,0,0,0,0,0],
        pet:[5,10,15,16,17,18,19,20],
        technic:[0,0,0,0,0,0,0,0]
    },
    {
        id:'pa',
        class:'Su',
        name:'ポイントアシスト',
        melee:[15],
        ranged:[15],
        pet:[15],
        technic:[15]
    },
    {
        id:'sf',
        class:'Su',
        name:'サポートファイア',
        melee:[10],
        ranged:[10],
        pet:[10],
        technic:[10]
    },
    {
        id:'ps',
        class:'Su',
        name:'ペットシンパシー',
        melee:[0],
        ranged:[0],
        pet:[10],
        technic:[0]
    }
]

for (var v of base_skills){
    skills.set(v.id,v);
}
