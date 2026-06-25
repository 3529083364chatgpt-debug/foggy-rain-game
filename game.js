// ==================== 游戏数据 ====================

// 线索数据
const clueDatabase = {
    // 物证
    will_modified: {
        name: '修改过的遗嘱',
        description: '死者林国栋死前一周修改了遗嘱，将大部分财产留给了一个神秘受益人，而非女儿林若曦。',
        type: 'physical'
    },
    locked_room: {
        name: '密室现场报告',
        description: '案发现场书房门窗均从内部反锁，钥匙在书桌上。警方初步判定为密室自杀。',
        type: 'physical'
    },
    sleeping_pills: {
        name: '安眠药瓶',
        description: '书桌上放着一瓶安眠药，瓶中剩余药片数量与处方记录不符，少了三片。',
        type: 'physical'
    },
    window_scratch: {
        name: '窗户划痕',
        description: '书房窗户把手处有细微的划痕，像是被细线或钢丝勒过留下的痕迹。',
        type: 'physical'
    },
    misplaced_book: {
        name: '错位的书',
        description: '书架上有一本书的位置明显不对，书脊颜色与周围格格不入。抽出来发现里面是空的，像是藏过什么东西。',
        type: 'physical'
    },
    blackmail_letter: {
        name: '勒索信',
        description: '一封匿名勒索信，要求林国栋在三天内准备五百万现金，否则就把"那件事"公之于众。',
        type: 'physical'
    },
    medical_record: {
        name: '病历记录',
        description: '林国栋患有严重抑郁症，长期服用抗抑郁药物。记录显示他死前一周曾要求医生增加药量。',
        type: 'physical'
    },
    
    // 证言
    affair_rumor: {
        name: '婚外情传闻',
        description: '据赵律师透露，林国栋多年前曾有过一段婚外情，对方似乎还为他生了孩子。这件事林家少有人知。',
        type: 'testimony'
    },
    linruoxi_alibi: {
        name: '林若曦的证词',
        description: '林若曦声称案发当晚她一直在自己房间睡觉，什么都没听到。但她的眼神有些躲闪。',
        type: 'testimony'
    },
    housekeeper_testimony: {
        name: '管家老周的证词',
        description: '老周说他早上七点准时送早餐时发现门反锁，敲门无人应答，用备用钥匙开门后发现了尸体。',
        type: 'testimony'
    },
    secretary_testimony: {
        name: '秘书的证词',
        description: '公司秘书说林总最近精神状态很差，经常接到神秘电话后大发雷霆，还让她取过大量现金。',
        type: 'testimony'
    },
    old_neighbor_testimony: {
        name: '老邻居的回忆',
        description: '旧城区的老邻居说，林国栋年轻时只是个小混混，后来突然发了家。听说跟当年一起混的一个兄弟"意外"死亡有关。',
        type: 'testimony'
    },
    doctor_testimony: {
        name: '医生的证词',
        description: '林国栋的主治医生说，他的抑郁症虽然严重，但从未表现出自杀倾向，反而一直在积极配合治疗。',
        type: 'testimony'
    },
    
    // 档案
    financial_problem: {
        name: '公司财务问题',
        description: '林氏地产最近资金链紧张，多个项目停工，财报显示负债高达数亿。',
        type: 'document'
    },
    illegitimate_child: {
        name: '私生子调查',
        description: '旧档案显示，林国栋确实有一个私生子，名叫周明，今年28岁，母亲在他十岁时去世了。',
        type: 'document'
    },
    old_case_file: {
        name: '旧案档案',
        description: '三十年前的一桩意外死亡案，死者叫陈建国，是林国栋当年的"兄弟"。案件定性为意外，但疑点重重。',
        type: 'document'
    },
    increased_dosage: {
        name: '加药记录',
        description: '医院记录显示，林国栋死前一周确实要求增加药量，但处方上的签字...似乎不是他本人的笔迹。',
        type: 'document'
    }
};

// 场景数据
const scenes = {
    // ==================== 第一章：雨夜委托 ====================
    start: {
        background: 'office',
        bgColor: '#1a1a2e',
        dialogs: [
            { speaker: '', text: '雨声，敲打着窗户。', effect: '' },
            { speaker: '', text: '已经连续下了七天了。', effect: '' },
            { speaker: '', text: '昏暗的侦探事务所里，你坐在办公桌后，手里转着一杯威士忌。', effect: '' },
            { speaker: '陈默', text: '（又是一个无聊的雨夜...）', effect: '' },
            { speaker: '', text: '桌上的相框里，是一张泛黄的照片——你和几个穿着警服的人站在一起。', effect: '' },
            { speaker: '', text: '三年前那场事故之后，你就从刑警队辞职了，开了这家小事务所。', effect: '' },
            { speaker: '', text: '咚咚咚——', effect: '' },
            { speaker: '', text: '敲门声打断了你的思绪。', effect: '' }
        ],
        autoNext: 'zhao_arrives'
    },
    
    zhao_arrives: {
        background: 'office',
        bgColor: '#1a1a2e',
        character: { name: '赵律师', position: 'right', color: '#2d3748' },
        dialogs: [
            { speaker: '', text: '门被推开，一个穿着西装的中年男人走了进来，手里提着一个公文包。', effect: '' },
            { speaker: '赵律师', text: '陈默，好久不见。', effect: '' },
            { speaker: '陈默', text: '老赵？什么风把你吹来了。', effect: '' },
            { speaker: '赵律师', text: '我有个案子...想委托你。', effect: '' },
            { speaker: '陈默', text: '案子？你应该去找警察才对。', effect: '' },
            { speaker: '赵律师', text: '警察已经结案了。但我觉得...事情没那么简单。', effect: '' },
            { speaker: '', text: '赵律师在你对面坐下，从公文包里拿出一叠文件。', effect: '' },
            { speaker: '赵律师', text: '林国栋，你应该听说过。林氏地产的老板。', effect: '' },
            { speaker: '陈默', text: '那个地产大亨？他怎么了？', effect: '' },
            { speaker: '赵律师', text: '三天前，死了。在自己别墅的书房里。', effect: '' }
        ],
        choices: [
            { text: '「自杀？还是他杀？」', nextScene: 'explain_case_1' },
            { text: '「跟我有什么关系？」', nextScene: 'explain_case_2' },
            { text: '「警方怎么说？」', nextScene: 'explain_case_3' }
        ]
    },
    
    explain_case_1: {
        background: 'office',
        bgColor: '#1a1a2e',
        character: { name: '赵律师', position: 'right', color: '#2d3748' },
        dialogs: [
            { speaker: '赵律师', text: '警方说是自杀。密室，门窗反锁，体内有过量安眠药...', effect: '' },
            { speaker: '赵律师', text: '但我跟了林总二十年，他不是会自杀的人。', effect: '' },
            { speaker: '陈默', text: '就凭直觉？', effect: '' },
            { speaker: '赵律师', text: '不止。他死前一周，刚修改了遗嘱。', effect: '' },
            { speaker: '', text: '【获得线索：修改过的遗嘱】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('will_modified'); },
        autoNext: 'accept_decision'
    },
    
    explain_case_2: {
        background: 'office',
        bgColor: '#1a1a2e',
        character: { name: '赵律师', position: 'right', color: '#2d3748' },
        dialogs: [
            { speaker: '赵律师', text: '我知道你现在只接些找猫找狗的小案子，但这次不一样。', effect: '' },
            { speaker: '赵律师', text: '林总是我的客户，也是我的朋友。我不能让他死得不明不白。', effect: '' },
            { speaker: '陈默', text: '...说吧，什么情况。', effect: '' },
            { speaker: '赵律师', text: '三天前，林总被发现死在自己别墅的书房里。现场是密室。', effect: '' },
            { speaker: '赵律师', text: '警方初步判定为自杀。但我觉得不对劲。', effect: '' },
            { speaker: '', text: '【获得线索：密室现场报告】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('locked_room'); },
        autoNext: 'accept_decision'
    },
    
    explain_case_3: {
        background: 'office',
        bgColor: '#1a1a2e',
        character: { name: '赵律师', position: 'right', color: '#2d3748' },
        dialogs: [
            { speaker: '赵律师', text: '警方说是自杀。现场是密室，门窗都从里面反锁了。', effect: '' },
            { speaker: '赵律师', text: '尸检结果是服用过量安眠药，体内还有酒精残留。', effect: '' },
            { speaker: '陈默', text: '听起来确实像自杀。', effect: '' },
            { speaker: '赵律师', text: '但林总没有自杀的理由。他的公司虽然遇到些问题，但远没到山穷水尽的地步。', effect: '' },
            { speaker: '赵律师', text: '而且...他死前一周，刚找我修改了遗嘱。把大部分财产都留给了一个外人。', effect: '' },
            { speaker: '', text: '【获得线索：密室现场报告】', effect: 'highlight-red' },
            { speaker: '', text: '【获得线索：修改过的遗嘱】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('locked_room'); addClue('will_modified'); },
        autoNext: 'accept_decision'
    },
    
    accept_decision: {
        background: 'office',
        bgColor: '#1a1a2e',
        character: { name: '赵律师', position: 'right', color: '#2d3748' },
        dialogs: [
            { speaker: '赵律师', text: '报酬方面你不用担心，林总留下的基金足够支付。', effect: '' },
            { speaker: '赵律师', text: '我只需要你查出真相。不管结果是什么。', effect: '' },
            { speaker: '', text: '你看着赵律师认真的表情，又看了看窗外的雨。', effect: '' },
            { speaker: '陈默', text: '（...这种天气，果然不适合闲着。）', effect: '' }
        ],
        choices: [
            { text: '「好，我接了。」', nextScene: 'chapter1_end' },
            { text: '「抱歉，我没兴趣。」', nextScene: 'ending_E' }
        ]
    },
    
    chapter1_end: {
        background: 'office',
        bgColor: '#1a1a2e',
        character: { name: '赵律师', position: 'right', color: '#2d3748' },
        dialogs: [
            { speaker: '赵律师', text: '太好了。明天我带你去别墅看看现场。', effect: '' },
            { speaker: '陈默', text: '不用等明天，现在就走。', effect: '' },
            { speaker: '赵律师', text: '现在？可是雨这么大...', effect: '' },
            { speaker: '陈默', text: '雨越大，证据消失得越快。', effect: '' },
            { speaker: '', text: '你拿起外套，走向门口。', effect: '' },
            { speaker: '', text: '——第一章 雨夜委托 完——', effect: 'highlight-red' },
            { speaker: '', text: '（游戏已自动存档）', effect: '' }
        ],
        onEnter: function() { 
            setFlag('chapter1_complete', true);
            autoSave(); 
        },
        choices: [
            { text: '继续游戏 →', nextScene: 'arrive_villa' }
        ]
    },
    
    // ==================== 第二章：别墅调查 ====================
    arrive_villa: {
        background: 'villa_entrance',
        bgColor: '#1a2a1a',
        dialogs: [
            { speaker: '', text: '四十分钟后，你和赵律师的车停在了一栋别墅前。', effect: '' },
            { speaker: '', text: '这是一栋坐落在半山腰的欧式别墅，在雨雾中显得格外阴森。', effect: '' },
            { speaker: '赵律师', text: '就是这里了。林总平时很少住这儿，案发那天他刚好过来拿东西。', effect: '' },
            { speaker: '陈默', text: '...', effect: '' },
            { speaker: '', text: '你打量着这栋别墅，总觉得哪里不对劲。', effect: '' },
            { speaker: '', text: '门开了，一个头发花白的老人走了出来。', effect: '' }
        ],
        autoNext: 'meet_housekeeper'
    },
    
    meet_housekeeper: {
        background: 'villa_entrance',
        bgColor: '#1a2a1a',
        character: { name: '老周', position: 'left', color: '#3d3d29' },
        dialogs: [
            { speaker: '老周', text: '赵律师，您来了。', effect: '' },
            { speaker: '老周', text: '这位是...？', effect: '' },
            { speaker: '赵律师', text: '这位是陈先生，我请来的...顾问。帮着再看看现场。', effect: '' },
            { speaker: '老周', text: '...好的，请进。', effect: '' },
            { speaker: '', text: '老周的目光在你身上停留了几秒，眼神复杂。', effect: '' },
            { speaker: '陈默', text: '（这个管家...不简单。）', effect: '' }
        ],
        choices: [
            { text: '先去书房（案发现场）', nextScene: 'study_room' },
            { text: '先找林若曦谈谈', nextScene: 'find_linruoxi' },
            { text: '先在客厅四处看看', nextScene: 'look_around_living' }
        ]
    },
    
    villa_investigate: {
        background: 'villa_entrance',
        bgColor: '#1a2a1a',
        character: { name: '老周', position: 'left', color: '#3d3d29' },
        dialogs: [
            { speaker: '', text: '你回到了别墅客厅。', effect: '' }
        ],
        choices: [
            { text: '去书房调查', nextScene: 'study_room_investigate' },
            { text: '找林若曦谈谈', nextScene: 'find_linruoxi' },
            { text: '在客厅四处看看', nextScene: 'look_around_living' },
            { text: '结束调查，开始推理', nextScene: 'deduction_1' }
        ]
    },
    
    study_room: {
        background: 'study_room',
        bgColor: '#2a1f14',
        dialogs: [
            { speaker: '', text: '你跟着老周上了二楼，来到书房门口。', effect: '' },
            { speaker: '老周', text: '现场基本保持原样，警方取证后就封起来了。', effect: '' },
            { speaker: '', text: '门推开的瞬间，一股陈旧的气息扑面而来。', effect: '' },
            { speaker: '', text: '这是一间很大的书房，书架从地板延伸到天花板。书桌上还放着没喝完的酒杯和一个药瓶。', effect: '' },
            { speaker: '陈默', text: '（...这就是案发的地方。）', effect: '' },
            { speaker: '', text: '你环顾四周，开始仔细检查。', effect: '' }
        ],
        choices: [
            { text: '检查书桌', nextScene: 'check_desk' },
            { text: '检查窗户', nextScene: 'check_window' },
            { text: '检查书架', nextScene: 'check_bookshelf' },
            { text: '离开书房', nextScene: 'villa_investigate' }
        ]
    },
    
    study_room_investigate: {
        background: 'study_room',
        bgColor: '#2a1f14',
        dialogs: [
            { speaker: '', text: '你继续在书房里搜查。', effect: '' }
        ],
        choices: [
            { text: '检查书桌', nextScene: 'check_desk' },
            { text: '检查窗户', nextScene: 'check_window' },
            { text: '检查书架', nextScene: 'check_bookshelf' },
            { text: '离开书房', nextScene: 'villa_investigate' }
        ]
    },
    
    check_desk: {
        background: 'study_room',
        bgColor: '#2a1f14',
        dialogs: [
            { speaker: '', text: '你走到书桌前，仔细观察。', effect: '' },
            { speaker: '', text: '桌上有一个空的威士忌酒杯，旁边是一瓶安眠药。', effect: '' },
            { speaker: '陈默', text: '（安眠药...）', effect: '' },
            { speaker: '', text: '你拿起药瓶看了看，里面还剩不少药片。', effect: '' },
            { speaker: '陈默', text: '（不对...处方上写的是一周前开的药，按正常剂量应该剩得更少才对。）', effect: '' },
            { speaker: '陈默', text: '（还是说...他那天晚上吃了不止正常剂量？）', effect: '' },
            { speaker: '', text: '【获得线索：安眠药瓶】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('sleeping_pills'); },
        choices: [
            { text: '继续检查其他地方', nextScene: 'study_room_investigate' },
            { text: '离开书房', nextScene: 'villa_investigate' }
        ]
    },
    
    check_window: {
        background: 'study_room',
        bgColor: '#2a1f14',
        dialogs: [
            { speaker: '', text: '你走到窗户边。这是一扇很大的落地窗，从这里可以看到外面的花园。', effect: '' },
            { speaker: '陈默', text: '（窗户是从里面反锁的...）', effect: '' },
            { speaker: '', text: '你试着扳了扳把手，确实锁得很紧。', effect: '' },
            { speaker: '陈默', text: '嗯？', effect: '' },
            { speaker: '', text: '你的目光落在把手下方——那里有几道细微的划痕，不仔细看根本发现不了。', effect: '' },
            { speaker: '陈默', text: '（这是...被什么东西勒过的痕迹？）', effect: '' },
            { speaker: '陈默', text: '（细线？还是...钢丝？）', effect: '' },
            { speaker: '', text: '【获得线索：窗户划痕】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('window_scratch'); },
        choices: [
            { text: '继续检查其他地方', nextScene: 'study_room_investigate' },
            { text: '离开书房', nextScene: 'villa_investigate' }
        ]
    },
    
    check_bookshelf: {
        background: 'study_room',
        bgColor: '#2a1f14',
        dialogs: [
            { speaker: '', text: '你走到书架前，扫过一排排书。', effect: '' },
            { speaker: '陈默', text: '（...）', effect: '' },
            { speaker: '', text: '突然，你注意到其中一本书的位置很突兀——书脊的颜色和周围的书格格不入，像是被人抽出来又随便插回去的。', effect: '' },
            { speaker: '', text: '你抽出那本书，发现...', effect: '' },
            { speaker: '陈默', text: '空的？', effect: '' },
            { speaker: '', text: '这本书的书脊是真的，但里面被挖空了，像是用来藏什么东西的。', effect: '' },
            { speaker: '陈默', text: '（这里原来藏着什么？现在又去哪了？）', effect: '' },
            { speaker: '', text: '【获得线索：错位的书】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('misplaced_book'); },
        choices: [
            { text: '继续检查其他地方', nextScene: 'study_room_investigate' },
            { text: '离开书房', nextScene: 'villa_investigate' }
        ]
    },
    
    find_linruoxi: {
        background: 'garden',
        bgColor: '#1a2a2a',
        character: { name: '林若曦', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '', text: '你在别墅后花园找到了林若曦。', effect: '' },
            { speaker: '', text: '她站在凉亭里，看着外面的雨，背影单薄。', effect: '' },
            { speaker: '陈默', text: '林小姐？', effect: '' },
            { speaker: '', text: '她转过身，看到你，微微一愣。', effect: '' },
            { speaker: '林若曦', text: '你是...？', effect: '' },
            { speaker: '陈默', text: '我姓陈，是赵律师请来的。关于你父亲的案子，有些问题想请教。', effect: '' },
            { speaker: '', text: '林若曦的表情冷了下来。', effect: '' },
            { speaker: '林若曦', text: '该说的我都跟警察说过了。没什么好补充的。', effect: '' }
        ],
        choices: [
            { text: '「案发当晚你在哪？」', nextScene: 'linruoxi_alibi' },
            { text: '「你和你父亲关系怎么样？」', nextScene: 'linruoxi_relation' },
            { text: '「听说你是学建筑的？」', nextScene: 'linruoxi_architecture' }
        ]
    },
    
    linruoxi_alibi: {
        background: 'garden',
        bgColor: '#1a2a2a',
        character: { name: '林若曦', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '林若曦', text: '我在自己房间睡觉。', effect: '' },
            { speaker: '陈默', text: '一整晚？', effect: '' },
            { speaker: '林若曦', text: '对。我那天很累，很早就睡了。', effect: '' },
            { speaker: '陈默', text: '没听到什么动静？', effect: '' },
            { speaker: '林若曦', text: '没有。这房子隔音很好。', effect: '' },
            { speaker: '', text: '她说话的时候，眼神下意识地飘向了别处。', effect: '' },
            { speaker: '陈默', text: '（...她在隐瞒什么。）', effect: '' },
            { speaker: '', text: '【获得线索：林若曦的证词】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('linruoxi_alibi'); changeFavorability('linruoxi', -5); },
        choices: [
            { text: '继续追问', nextScene: 'linruoxi_press' },
            { text: '换个话题', nextScene: 'find_linruoxi' },
            { text: '结束对话', nextScene: 'villa_investigate' }
        ]
    },
    
    linruoxi_press: {
        background: 'garden',
        bgColor: '#1a2a2a',
        character: { name: '林若曦', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '陈默', text: '林小姐，你确定案发当晚你真的在房间里？', effect: '' },
            { speaker: '林若曦', text: '你什么意思？', effect: '' },
            { speaker: '陈默', text: '没什么。只是觉得...一个刚失去父亲的女儿，说起父亲的死，未免太冷静了些。', effect: '' },
            { speaker: '', text: '林若曦的脸色变了变。', effect: '' },
            { speaker: '林若曦', text: '...你想说我杀了我父亲？', effect: '' },
            { speaker: '陈默', text: '我没这么说。', effect: '' },
            { speaker: '林若曦', text: '够了。我不想再跟你谈了。', effect: '' },
            { speaker: '', text: '她转身就走，留下你一个人站在凉亭里。', effect: '' },
            { speaker: '陈默', text: '（...反应这么大，更说明有问题。）', effect: '' }
        ],
        onEnter: function() { changeFavorability('linruoxi', -15); },
        choices: [
            { text: '回到大厅', nextScene: 'villa_investigate' }
        ]
    },
    
    linruoxi_relation: {
        background: 'garden',
        bgColor: '#1a2a2a',
        character: { name: '林若曦', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '林若曦', text: '...就那样。普通父女。', effect: '' },
            { speaker: '陈默', text: '普通？', effect: '' },
            { speaker: '林若曦', text: '他很忙，常年不在家。我从小基本是老周带大的。', effect: '' },
            { speaker: '林若曦', text: '说起来你可能不信，我们一年说的话加起来可能还不到一百句。', effect: '' },
            { speaker: '陈默', text: '听说他最近修改了遗嘱？', effect: '' },
            { speaker: '', text: '林若曦的身体微微一僵。', effect: '' },
            { speaker: '林若曦', text: '...赵律师连这个都告诉你了？', effect: '' },
            { speaker: '林若曦', text: '是，他改了遗嘱。把大部分财产都留给了一个我不知道的人。', effect: '' },
            { speaker: '林若曦', text: '满意了？', effect: '' },
            { speaker: '陈默', text: '（...她知道遗嘱的事。那她的动机...）', effect: '' }
        ],
        onEnter: function() { changeFavorability('linruoxi', -5); },
        choices: [
            { text: '继续聊', nextScene: 'find_linruoxi' },
            { text: '结束对话', nextScene: 'villa_investigate' }
        ]
    },
    
    linruoxi_architecture: {
        background: 'garden',
        bgColor: '#1a2a2a',
        character: { name: '林若曦', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '林若曦', text: '...你怎么知道？', effect: '' },
            { speaker: '陈默', text: '赵律师提过。说你是学建筑设计的，刚从国外回来。', effect: '' },
            { speaker: '林若曦', text: '嗯。在英国读了七年。', effect: '' },
            { speaker: '陈默', text: '学建筑的话，对房屋结构应该很了解吧？比如...密室什么的。', effect: '' },
            { speaker: '', text: '林若曦猛地看向你，眼神锐利。', effect: '' },
            { speaker: '林若曦', text: '...你在试探我？', effect: '' },
            { speaker: '陈默', text: '随便聊聊而已。', effect: '' },
            { speaker: '林若曦', text: '哼。', effect: '' },
            { speaker: '', text: '她的表情缓和了一些，似乎觉得你不是那么无趣。', effect: '' },
            { speaker: '林若曦', text: '如果你对建筑感兴趣，我可以跟你聊聊。但我父亲的事...我真的没什么好说的。', effect: '' }
        ],
        onEnter: function() { changeFavorability('linruoxi', 10); },
        choices: [
            { text: '继续聊建筑', nextScene: 'linruoxi_architecture_more' },
            { text: '还是聊案子吧', nextScene: 'find_linruoxi' },
            { text: '结束对话', nextScene: 'villa_investigate' }
        ]
    },
    
    linruoxi_architecture_more: {
        background: 'garden',
        bgColor: '#1a2a2a',
        character: { name: '林若曦', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '', text: '你和林若曦聊了一会儿建筑。她谈起专业时，整个人都不一样了，眼神里有光。', effect: '' },
            { speaker: '林若曦', text: '...说起来，这栋别墅的设计就有问题。', effect: '' },
            { speaker: '陈默', text: '什么问题？', effect: '' },
            { speaker: '林若曦', text: '二楼书房的窗户，看起来是普通的落地窗，但其实...', effect: '' },
            { speaker: '', text: '她突然停住了，像是意识到了什么。', effect: '' },
            { speaker: '林若曦', text: '...没什么。我乱说的。', effect: '' },
            { speaker: '陈默', text: '（...她刚才想说什么？）', effect: '' },
            { speaker: '陈默', text: '（书房的窗户...有什么特别的？）', effect: '' }
        ],
        onEnter: function() { changeFavorability('linruoxi', 15); setFlag('linruoxi_hint_window', true); },
        choices: [
            { text: '追问窗户的事', nextScene: 'linruoxi_window_hint' },
            { text: '不追问，顺其自然', nextScene: 'meet_housekeeper' }
        ]
    },
    
    linruoxi_window_hint: {
        background: 'garden',
        bgColor: '#1a2a2a',
        character: { name: '林若曦', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '陈默', text: '书房的窗户怎么了？', effect: '' },
            { speaker: '林若曦', text: '...我真的不能说。', effect: '' },
            { speaker: '陈默', text: '如果这跟你父亲的死有关呢？', effect: '' },
            { speaker: '', text: '她沉默了很久。', effect: '' },
            { speaker: '林若曦', text: '...那扇窗户，有一个隐蔽的排水槽。', effect: '' },
            { speaker: '林若曦', text: '设计的时候为了美观，把排水槽做在了窗框内部，从外面看不到。', effect: '' },
            { speaker: '林若曦', text: '如果...如果有人利用那个排水槽的话...', effect: '' },
            { speaker: '陈默', text: '（排水槽...细线...从外部反锁的机关...）', effect: '' },
            { speaker: '陈默', text: '（原来如此。密室的手法...）', effect: '' },
            { speaker: '', text: '【林若曦的好感度提升了】', effect: '' }
        ],
        onEnter: function() { changeFavorability('linruoxi', 10); setFlag('know_window_trick', true); },
        choices: [
            { text: '谢谢，我明白了', nextScene: 'meet_housekeeper' }
        ]
    },
    
    look_around_living: {
        background: 'living_room',
        bgColor: '#1f1a14',
        dialogs: [
            { speaker: '', text: '你在客厅里四处走动，观察着。', effect: '' },
            { speaker: '', text: '这是一个很大的客厅，装修奢华，但总觉得缺少些人气。', effect: '' },
            { speaker: '陈默', text: '（...墙上的照片。）', effect: '' },
            { speaker: '', text: '你注意到墙上挂着很多照片，大多是林国栋和各种人的合影。', effect: '' },
            { speaker: '', text: '但奇怪的是，没有一张是全家福。', effect: '' },
            { speaker: '陈默', text: '（连一张女儿的照片都没有吗...）', effect: '' },
            { speaker: '', text: '你继续看，突然在一张合影里发现了一个熟悉的身影。', effect: '' },
            { speaker: '陈默', text: '！', effect: '' },
            { speaker: '陈默', text: '（这个人...是老周？）', effect: '' },
            { speaker: '', text: '照片里，年轻时候的老周站在林国栋身边，两人勾肩搭背，看起来关系很好。', effect: '' },
            { speaker: '陈默', text: '（他们不是主仆关系吗...怎么看起来像兄弟？）', effect: '' }
        ],
        onEnter: function() { setFlag('notice_zhou_photo', true); },
        choices: [
            { text: '去书房', nextScene: 'study_room' },
            { text: '找林若曦', nextScene: 'find_linruoxi' },
            { text: '问问老周照片的事', nextScene: 'ask_zhou_photo' }
        ]
    },
    
    ask_zhou_photo: {
        background: 'living_room',
        bgColor: '#1f1a14',
        character: { name: '老周', position: 'left', color: '#3d3d29' },
        dialogs: [
            { speaker: '陈默', text: '周叔，墙上那张照片...', effect: '' },
            { speaker: '老周', text: '...那是很多年前的事了。', effect: '' },
            { speaker: '陈默', text: '你和林先生...很早就认识了？', effect: '' },
            { speaker: '老周', text: '三十年了。', effect: '' },
            { speaker: '老周', text: '我跟林总...是一起打拼过来的。', effect: '' },
            { speaker: '陈默', text: '那为什么后来你成了管家？', effect: '' },
            { speaker: '', text: '老周沉默了。', effect: '' },
            { speaker: '老周', text: '...有些事，过去了就过去了。', effect: '' },
            { speaker: '老周', text: '陈先生，您还是查案子吧。别的事，跟案子没关系。', effect: '' },
            { speaker: '陈默', text: '（...他在回避。）', effect: '' }
        ],
        onEnter: function() { setFlag('zhou_past', true); },
        choices: [
            { text: '去书房调查', nextScene: 'study_room' },
            { text: '找林若曦谈话', nextScene: 'find_linruoxi' },
            { text: '差不多了，进入推理', nextScene: 'deduction_1_intro' }
        ]
    },
    
    deduction_1_intro: {
        background: 'study_room',
        bgColor: '#2a1f14',
        dialogs: [
            { speaker: '', text: '你再次来到书房，站在房间中央，闭上眼睛。', effect: '' },
            { speaker: '陈默', text: '（让我想想...）', effect: '' },
            { speaker: '', text: '密室。反锁的门窗。过量的安眠药。', effect: '' },
            { speaker: '', text: '还有...窗户把手上的划痕。', effect: '' },
            { speaker: '陈默', text: '（凶手是怎么制造密室的？）', effect: '' }
        ],
        autoNext: 'deduction_1'
    },
    
    deduction_1: {
        background: 'study_room',
        bgColor: '#2a1f14',
        isDeduction: true,
        deductionQuestion: '凶手是如何制造密室的？',
        deductionOptions: [
            { text: 'A. 凶手从窗户逃走，然后从外面锁上', correct: false, penalty: { san: -15 } },
            { text: 'B. 密室是假的，门根本没锁', correct: false, penalty: { san: -15 } },
            { text: 'C. 利用细线机关从外部反锁门窗', correct: true, reward: { san: 10 } }
        ],
        correctText: '没错。窗户把手上的划痕，就是细线勒过的痕迹。凶手杀人后，用细线穿过把手，通过窗框的排水槽引到外面，从外面拉紧细线就能反锁窗户，最后回收细线。完美的密室。',
        wrongText: '不对...再想想。窗户把手上的划痕，是关键线索。',
        nextScene: 'chapter2_end'
    },
    
    chapter2_end: {
        background: 'villa_entrance',
        bgColor: '#1a2a1a',
        dialogs: [
            { speaker: '', text: '你走出别墅，雨还在下。', effect: '' },
            { speaker: '陈默', text: '（密室手法已经解开了...但凶手是谁？）', effect: '' },
            { speaker: '', text: '这时，赵律师走了过来。', effect: '' },
            { speaker: '赵律师', text: '怎么样，有收获吗？', effect: '' },
            { speaker: '陈默', text: '有一些。但还不够。', effect: '' },
            { speaker: '陈默', text: '我需要更多信息。林国栋的公司、他过去的经历、还有他的病历...', effect: '' },
            { speaker: '赵律师', text: '这些...我可以帮你安排。但你得选一个方向先查。', effect: '' },
            { speaker: '', text: '——第二章 别墅调查 完——', effect: 'highlight-red' },
            { speaker: '', text: '（游戏已自动存档）', effect: '' }
        ],
        onEnter: function() { 
            setFlag('chapter2_complete', true);
            autoSave(); 
        },
        choices: [
            { text: '继续游戏 →', nextScene: 'choose_investigation' }
        ]
    },
    
    // ==================== 第三章：深入调查 ====================
    choose_investigation: {
        background: 'office',
        bgColor: '#1a1a2e',
        dialogs: [
            { speaker: '', text: '第二天，你回到事务所，整理目前掌握的线索。', effect: '' },
            { speaker: '陈默', text: '（密室手法已经解开了，但凶手的身份还是个谜。）', effect: '' },
            { speaker: '陈默', text: '（有动机的人不少...但证据还不够。）', effect: '' },
            { speaker: '', text: '桌上的电话响了，是赵律师打来的。', effect: '' },
            { speaker: '赵律师', text: '陈默，我帮你安排好了。你可以去林氏公司查，也可以去医院查病历，或者...去老城区那边打听打听他年轻时的事。', effect: '' },
            { speaker: '赵律师', text: '但你只能选一个，时间有限。', effect: '' },
            { speaker: '陈默', text: '（先查哪条线呢...）', effect: '' }
        ],
        choices: [
            { text: '去林氏公司调查', nextScene: 'company_investigation' },
            { text: '去老城区查过去', nextScene: 'old_town_investigation' },
            { text: '去医院查病历', nextScene: 'hospital_investigation' }
        ]
    },
    
    company_investigation: {
        background: 'company',
        bgColor: '#1a2a2a',
        dialogs: [
            { speaker: '', text: '你来到林氏地产的总部，一栋位于市中心的摩天大楼。', effect: '' },
            { speaker: '', text: '赵律师已经打过招呼了，前台直接把你领到了董事长秘书的办公室。', effect: '' },
            { speaker: '', text: '秘书是一个戴着眼镜的年轻女人，看起来很干练。', effect: '' },
            { speaker: '秘书', text: '陈先生您好，我是林总的秘书，小王。', effect: '' },
            { speaker: '秘书', text: '赵律师已经跟我说过了，您有什么问题尽管问。', effect: '' },
            { speaker: '陈默', text: '林总出事前，有什么异常吗？', effect: '' },
            { speaker: '', text: '王秘书推了推眼镜，表情变得有些凝重。', effect: '' }
        ],
        choices: [
            { text: '问公司财务状况', nextScene: 'company_finance' },
            { text: '问最近的访客/电话', nextScene: 'company_visitors' },
            { text: '问林总的精神状态', nextScene: 'company_state' }
        ]
    },
    
    company_finance: {
        background: 'company',
        bgColor: '#1a2a2a',
        character: { name: '王秘书', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '秘书', text: '...说实话，公司最近情况不太好。', effect: '' },
            { speaker: '秘书', text: '几个大项目都出了问题，资金链很紧张。', effect: '' },
            { speaker: '秘书', text: '林总最近一直在想办法融资，但都不太顺利。', effect: '' },
            { speaker: '陈默', text: '有多紧张？', effect: '' },
            { speaker: '秘书', text: '...再这样下去，可能撑不过年底。', effect: '' },
            { speaker: '陈默', text: '（公司快破产了...那林国栋死了，对谁最有利？）', effect: '' },
            { speaker: '', text: '【获得线索：公司财务问题】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('financial_problem'); },
        choices: [
            { text: '继续问其他问题', nextScene: 'company_investigation' },
            { text: '结束调查', nextScene: 'mysterious_call' }
        ]
    },
    
    company_visitors: {
        background: 'company',
        bgColor: '#1a2a2a',
        character: { name: '王秘书', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '秘书', text: '访客的话...最近倒是有几个陌生人来找林总。', effect: '' },
            { speaker: '秘书', text: '但林总都是单独见的，不让我在场。', effect: '' },
            { speaker: '陈默', text: '电话呢？', effect: '' },
            { speaker: '秘书', text: '电话...有几通很奇怪的电话。', effect: '' },
            { speaker: '秘书', text: '对方不说话，等林总接了之后，就说些什么"别忘了那件事""钱准备好了吗"之类的。', effect: '' },
            { speaker: '秘书', text: '每次接完这种电话，林总都很生气，还摔过东西。', effect: '' },
            { speaker: '陈默', text: '（勒索...？）', effect: '' },
            { speaker: '', text: '【获得线索：秘书的证词】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('secretary_testimony'); },
        choices: [
            { text: '继续问其他问题', nextScene: 'company_investigation' },
            { text: '结束调查', nextScene: 'mysterious_call' }
        ]
    },
    
    company_state: {
        background: 'company',
        bgColor: '#1a2a2a',
        character: { name: '王秘书', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '秘书', text: '精神状态...林总最近确实不太好。', effect: '' },
            { speaker: '秘书', text: '经常失眠，有时候开会都会走神。', effect: '' },
            { speaker: '秘书', text: '他还让我取过几次现金，每次都是几百万...我不知道他用来做什么。', effect: '' },
            { speaker: '陈默', text: '现金？几百万？', effect: '' },
            { speaker: '秘书', text: '嗯。而且他还特意让我取旧钞，连号的不要。', effect: '' },
            { speaker: '陈默', text: '（旧钞、不要连号...这是勒索的典型特征。）', effect: '' },
            { speaker: '陈默', text: '（林国栋被人勒索了？）', effect: '' },
            { speaker: '', text: '你在林国栋的办公桌抽屉里找到了一封信。', effect: '' },
            { speaker: '', text: '【获得线索：勒索信】', effect: 'highlight-red' },
            { speaker: '', text: '【获得线索：秘书的证词】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('blackmail_letter'); addClue('secretary_testimony'); },
        choices: [
            { text: '继续问其他问题', nextScene: 'company_investigation' },
            { text: '结束调查', nextScene: 'mysterious_call' }
        ]
    },
    
    old_town_investigation: {
        background: 'old_town',
        bgColor: '#2a1f14',
        dialogs: [
            { speaker: '', text: '你来到了雾都市的老城区。', effect: '' },
            { speaker: '', text: '这里与繁华的市中心截然不同，街道狭窄，房屋破旧，空气中弥漫着潮湿的气息。', effect: '' },
            { speaker: '陈默', text: '（林国栋就是从这里发家的...）', effect: '' },
            { speaker: '', text: '你找到一家开了几十年的老茶馆，走了进去。', effect: '' },
            { speaker: '', text: '茶馆里坐着几个老人，正在下棋聊天。', effect: '' },
            { speaker: '陈默', text: '（问问他们吧。）', effect: '' }
        ],
        choices: [
            { text: '问林国栋年轻时的事', nextScene: 'old_town_past' },
            { text: '问老周的事', nextScene: 'old_town_zhou' },
            { text: '问当年的旧案', nextScene: 'old_town_case' }
        ]
    },
    
    old_town_past: {
        background: 'old_town',
        bgColor: '#2a1f14',
        character: { name: '老邻居', position: 'left', color: '#3d3d29' },
        dialogs: [
            { speaker: '老邻居', text: '林国栋？嗨，那小子我认识！', effect: '' },
            { speaker: '老邻居', text: '年轻时可不是什么好东西，跟个小混混似的，天天跟人打架。', effect: '' },
            { speaker: '老邻居', text: '不过后来突然就发了，说是做生意赚了钱。谁知道呢...', effect: '' },
            { speaker: '陈默', text: '他跟谁混？', effect: '' },
            { speaker: '老邻居', text: '跟一个叫...叫什么来着？哦对，陈建国。两个人好得跟亲兄弟似的。', effect: '' },
            { speaker: '陈默', text: '陈建国...？', effect: '' },
            { speaker: '老邻居', text: '嗯。不过后来死了，说是意外掉河里淹死的。', effect: '' },
            { speaker: '老邻居', text: '他死了之后没多久，林国栋就发了。', effect: '' },
            { speaker: '老邻居', text: '嘿，你说巧不巧？', effect: '' },
            { speaker: '陈默', text: '（...太巧了。）', effect: '' },
            { speaker: '', text: '【获得线索：老邻居的回忆】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('old_neighbor_testimony'); },
        choices: [
            { text: '继续问其他问题', nextScene: 'old_town_investigation' },
            { text: '结束调查', nextScene: 'mysterious_call' }
        ]
    },
    
    old_town_zhou: {
        background: 'old_town',
        bgColor: '#2a1f14',
        character: { name: '老邻居', position: 'left', color: '#3d3d29' },
        dialogs: [
            { speaker: '陈默', text: '那您认识老周吗？周管家。', effect: '' },
            { speaker: '老邻居', text: '老周？周明他爹？', effect: '' },
            { speaker: '陈默', text: '周明？', effect: '' },
            { speaker: '老邻居', text: '哦不对，老周叫...周建国？不对不对，我想想...', effect: '' },
            { speaker: '老邻居', text: '嗨，年纪大了记不清了。反正老周当年也跟林国栋一起混过。', effect: '' },
            { speaker: '老邻居', text: '后来不知道怎么的，就成了林家的管家。', effect: '' },
            { speaker: '老邻居', text: '说起来，老周好像有个儿子，比林若曦大几岁吧。', effect: '' },
            { speaker: '老邻居', text: '那孩子他妈死得早，老周一个人带大的。', effect: '' },
            { speaker: '陈默', text: '（老周有个儿子...？）', effect: '' },
            { speaker: '陈默', text: '（遗嘱里的神秘受益人...会不会是...）', effect: '' }
        ],
        onEnter: function() { setFlag('zhou_has_son', true); },
        choices: [
            { text: '继续问其他问题', nextScene: 'old_town_investigation' },
            { text: '结束调查', nextScene: 'mysterious_call' }
        ]
    },
    
    old_town_case: {
        background: 'old_town',
        bgColor: '#2a1f14',
        character: { name: '老邻居', position: 'left', color: '#3d3d29' },
        dialogs: [
            { speaker: '陈默', text: '当年陈建国的死...是怎么回事？', effect: '' },
            { speaker: '老邻居', text: '说是喝多了，掉河里淹死的。', effect: '' },
            { speaker: '老邻居', text: '但我总觉得不对劲。', effect: '' },
            { speaker: '陈默', text: '怎么说？', effect: '' },
            { speaker: '老邻居', text: '陈建国那小子，水性好得很，小时候能在河里游好几个来回。怎么可能说淹死就淹死？', effect: '' },
            { speaker: '老邻居', text: '而且...他死之前，刚跟林国栋吵过一架，吵得很凶。', effect: '' },
            { speaker: '老邻居', text: '具体因为啥我也不知道，只听见什么"钱""分赃"之类的。', effect: '' },
            { speaker: '陈默', text: '（...）', effect: '' },
            { speaker: '陈默', text: '（如果林国栋当年杀了陈建国，侵吞了赃款...）', effect: '' },
            { speaker: '陈默', text: '（那现在有人拿这件事勒索他，就说得通了。）', effect: '' },
            { speaker: '', text: '【获得线索：旧案档案】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('old_case_file'); },
        choices: [
            { text: '继续问其他问题', nextScene: 'old_town_investigation' },
            { text: '结束调查', nextScene: 'mysterious_call' }
        ]
    },
    
    hospital_investigation: {
        background: 'hospital',
        bgColor: '#1a2a2a',
        dialogs: [
            { speaker: '', text: '你来到了林国栋就诊的私立医院。', effect: '' },
            { speaker: '', text: '赵律师帮你联系了他的主治医生。', effect: '' },
            { speaker: '', text: '医生办公室在走廊尽头，你敲了敲门。', effect: '' },
            { speaker: '医生', text: '请进。', effect: '' },
            { speaker: '', text: '你走进去，看到一个穿着白大褂的中年男人正在写病历。', effect: '' },
            { speaker: '陈默', text: '李医生您好，我姓陈。关于林国栋先生的案子...', effect: '' },
            { speaker: '医生', text: '赵律师跟我说过了。你坐吧。', effect: '' }
        ],
        choices: [
            { text: '问抑郁症病情', nextScene: 'hospital_depression' },
            { text: '问加药的事', nextScene: 'hospital_dosage' },
            { text: '问死前状态', nextScene: 'hospital_state' }
        ]
    },
    
    hospital_depression: {
        background: 'hospital',
        bgColor: '#1a2a2a',
        character: { name: '李医生', position: 'right', color: '#2a3a3a' },
        dialogs: [
            { speaker: '医生', text: '林先生的抑郁症...确实比较严重。', effect: '' },
            { speaker: '医生', text: '主要表现为失眠、情绪低落、对什么都提不起兴趣。', effect: '' },
            { speaker: '陈默', text: '有自杀倾向吗？', effect: '' },
            { speaker: '医生', text: '...这也是我觉得奇怪的地方。', effect: '' },
            { speaker: '医生', text: '他虽然抑郁严重，但从未表现出自杀的想法。反而一直在积极配合治疗，说还有很多事要做。', effect: '' },
            { speaker: '医生', text: '所以当我听说他自杀的时候...我很意外。', effect: '' },
            { speaker: '陈默', text: '（一个积极治疗的人，突然自杀...）', effect: '' },
            { speaker: '', text: '【获得线索：医生的证词】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('doctor_testimony'); },
        choices: [
            { text: '继续问其他问题', nextScene: 'hospital_investigation' },
            { text: '结束调查', nextScene: 'mysterious_call' }
        ]
    },
    
    hospital_dosage: {
        background: 'hospital',
        bgColor: '#1a2a2a',
        character: { name: '李医生', position: 'right', color: '#2a3a3a' },
        dialogs: [
            { speaker: '陈默', text: '听说他死前一周要求加药？', effect: '' },
            { speaker: '医生', text: '嗯...是的。', effect: '' },
            { speaker: '医生', text: '他给我打电话，说最近睡眠更差了，让我加药量。', effect: '' },
            { speaker: '陈默', text: '是他本人打的吗？', effect: '' },
            { speaker: '医生', text: '...应该是吧。声音很像。', effect: '' },
            { speaker: '陈默', text: '应该？', effect: '' },
            { speaker: '医生', text: '怎么说呢...电话里的声音有点哑，而且他那天特别着急，没说两句就挂了。', effect: '' },
            { speaker: '医生', text: '现在想想...确实有点奇怪。', effect: '' },
            { speaker: '陈默', text: '（如果那通电话不是林国栋本人打的...）', effect: '' },
            { speaker: '陈默', text: '（那加药量，就是凶手计划的一部分...）', effect: '' },
            { speaker: '', text: '【获得线索：加药记录】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('increased_dosage'); },
        choices: [
            { text: '继续问其他问题', nextScene: 'hospital_investigation' },
            { text: '结束调查', nextScene: 'mysterious_call' }
        ]
    },
    
    hospital_state: {
        background: 'hospital',
        bgColor: '#1a2a2a',
        character: { name: '李医生', position: 'right', color: '#2a3a3a' },
        dialogs: [
            { speaker: '医生', text: '死前那段时间...他最后一次来复诊是两周前。', effect: '' },
            { speaker: '医生', text: '那时候他状态其实还不错，说最近在处理一些"旧事"，处理完了就能安心了。', effect: '' },
            { speaker: '陈默', text: '旧事？', effect: '' },
            { speaker: '医生', text: '他没细说。我也没多问。', effect: '' },
            { speaker: '医生', text: '对了，他还问过我一个奇怪的问题。', effect: '' },
            { speaker: '陈默', text: '什么问题？', effect: '' },
            { speaker: '医生', text: '他问我...如果一个人吃了安眠药，再喝很多酒，会不会很痛苦。', effect: '' },
            { speaker: '陈默', text: '...', effect: '' },
            { speaker: '医生', text: '我当时以为他是好奇，现在想想...', effect: '' },
            { speaker: '陈默', text: '（他是在确认杀人手法？还是...真的在考虑自杀？）', effect: '' },
            { speaker: '', text: '【获得线索：医生的证词】', effect: 'highlight-red' },
            { speaker: '', text: '【获得线索：病历记录】', effect: 'highlight-red' }
        ],
        onEnter: function() { addClue('doctor_testimony'); addClue('medical_record'); },
        choices: [
            { text: '继续问其他问题', nextScene: 'hospital_investigation' },
            { text: '结束调查', nextScene: 'mysterious_call' }
        ]
    },
    
    mysterious_call: {
        background: 'street',
        bgColor: '#1a1a2e',
        dialogs: [
            { speaker: '', text: '你走在雨中的街道上，整理着今天查到的信息。', effect: '' },
            { speaker: '', text: '突然，手机响了。', effect: '' },
            { speaker: '陈默', text: '（陌生号码...？）', effect: '' },
            { speaker: '陈默', text: '喂？', effect: '' },
            { speaker: '', text: '电话那头传来一个经过处理的声音，分不清男女。', effect: '' },
            { speaker: '神秘人', text: '陈侦探，查得怎么样了？', effect: 'tremble' },
            { speaker: '陈默', text: '你是谁？', effect: '' },
            { speaker: '神秘人', text: '我是谁不重要。重要的是...我知道真相。', effect: 'tremble' },
            { speaker: '神秘人', text: '想知道林国栋是怎么死的吗？', effect: 'tremble' }
        ],
        choices: [
            { text: '「你说，我听着。」', nextScene: 'mysterious_truth' },
            { text: '「你就是凶手？」', nextScene: 'mysterious_accuse' },
            { text: '直接挂断', nextScene: 'mysterious_hangup' }
        ]
    },
    
    mysterious_truth: {
        background: 'street',
        bgColor: '#1a1a2e',
        dialogs: [
            { speaker: '神秘人', text: '呵呵...林国栋的死，是报应。', effect: 'tremble' },
            { speaker: '神秘人', text: '三十年前，他欠了一条命。现在，该还了。', effect: 'tremble' },
            { speaker: '陈默', text: '三十年前...陈建国？', effect: '' },
            { speaker: '神秘人', text: '你查到了啊。不错。', effect: 'tremble' },
            { speaker: '神秘人', text: '那你猜猜，我是谁？', effect: 'tremble' },
            { speaker: '陈默', text: '...', effect: '' },
            { speaker: '神秘人', text: '算了，给你个提示。', effect: 'tremble' },
            { speaker: '神秘人', text: '密室的手法，你解开了吧？但你知道凶手是怎么进入书房的吗？', effect: 'tremble' },
            { speaker: '神秘人', text: '答案...在老周身上。', effect: 'tremble' },
            { speaker: '', text: '电话挂断了。', effect: '' },
            { speaker: '陈默', text: '（老周...？他跟案子有什么关系？）', effect: '' },
            { speaker: '陈默', text: '（还是说...神秘人是故意把我往老周身上引？）', effect: '' }
        ],
        onEnter: function() { setFlag('mysterious_hint_zhou', true); changeSan(-5); },
        autoNext: 'chapter3_end'
    },
    
    mysterious_accuse: {
        background: 'street',
        bgColor: '#1a1a2e',
        dialogs: [
            { speaker: '陈默', text: '是你杀了林国栋？', effect: '' },
            { speaker: '神秘人', text: '哈哈哈...', effect: 'tremble' },
            { speaker: '神秘人', text: '我？我只是个旁观者。', effect: 'tremble' },
            { speaker: '神秘人', text: '杀人的...是他自己的罪孽。', effect: 'tremble' },
            { speaker: '陈默', text: '什么意思？', effect: '' },
            { speaker: '神秘人', text: '你慢慢查吧，陈侦探。', effect: 'tremble' },
            { speaker: '神秘人', text: '等你查到真相那天...你会感谢我的。', effect: 'tremble' },
            { speaker: '', text: '电话挂断了。', effect: '' },
            { speaker: '陈默', text: '（...故弄玄虚。）', effect: '' },
            { speaker: '陈默', text: '（但他说的"罪孽"是什么意思？）', effect: '' }
        ],
        onEnter: function() { setFlag('mysterious_called', true); changeSan(-10); },
        autoNext: 'chapter3_end'
    },
    
    mysterious_hangup: {
        background: 'street',
        bgColor: '#1a1a2e',
        dialogs: [
            { speaker: '', text: '你直接挂断了电话。', effect: '' },
            { speaker: '陈默', text: '（装神弄鬼。）', effect: '' },
            { speaker: '', text: '但不知为什么，你的心里有些不安。', effect: '' },
            { speaker: '陈默', text: '（那个声音...好像在哪里听过。）', effect: '' },
            { speaker: '', text: '你摇了摇头，把这个念头甩了出去。', effect: '' }
        ],
        onEnter: function() { setFlag('mysterious_hungup', true); },
        autoNext: 'chapter3_end'
    },
    
    chapter3_end: {
        background: 'office',
        bgColor: '#1a1a2e',
        dialogs: [
            { speaker: '', text: '你回到事务所，已经是深夜了。', effect: '' },
            { speaker: '', text: '你把今天查到的线索都摊在桌上，开始整理。', effect: '' },
            { speaker: '陈默', text: '（林国栋被勒索...跟三十年前的旧案有关...）', effect: '' },
            { speaker: '陈默', text: '（凶手...是来复仇的？）', effect: '' },
            { speaker: '陈默', text: '（但到底是谁？林若曦？老周？还是...另有其人？）', effect: '' },
            { speaker: '', text: '你看着窗外的雨，陷入了沉思。', effect: '' },
            { speaker: '', text: '——第三章 深入调查 完——', effect: 'highlight-red' },
            { speaker: '', text: '（游戏已自动存档）', effect: '' }
        ],
        onEnter: function() { 
            setFlag('chapter3_complete', true);
            autoSave(); 
        },
        choices: [
            { text: '继续游戏 →', nextScene: 'final_confrontation' }
        ]
    },
    
    // ==================== 第四章：真相逼近 ====================
    final_confrontation: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        dialogs: [
            { speaker: '', text: '第二天，你再次来到林家别墅。', effect: '' },
            { speaker: '', text: '按照你的要求，所有相关人员都聚集在了客厅。', effect: '' },
            { speaker: '', text: '林若曦、老周、赵律师、张警官...还有你。', effect: '' },
            { speaker: '张警官', text: '陈默，你最好真的有重要的事。我很忙。', effect: '' },
            { speaker: '陈默', text: '放心，不会耽误你太久。', effect: '' },
            { speaker: '陈默', text: '关于林国栋的死...我已经知道真相了。', effect: '' },
            { speaker: '', text: '话音落下，在场所有人的表情都变了。', effect: '' },
            { speaker: '林若曦', text: '...真相？', effect: '' },
            { speaker: '陈默', text: '没错。这不是自杀，是谋杀。', effect: '' },
            { speaker: '张警官', text: '谋杀？现场可是密室！', effect: '' },
            { speaker: '陈默', text: '密室是伪造的。凶手用细线机关从外部反锁了窗户。', effect: '' },
            { speaker: '陈默', text: '而凶手...就在我们中间。', effect: '' }
        ],
        choices: [
            { text: '指认林若曦', nextScene: 'accuse_linruoxi' },
            { text: '指认老周', nextScene: 'accuse_zhou' },
            { text: '指认赵律师', nextScene: 'accuse_zhao' },
            { text: '说凶手另有其人', nextScene: 'accuse_other' }
        ]
    },
    
    accuse_linruoxi: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        character: { name: '林若曦', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '陈默', text: '林若曦，凶手是你。', effect: '' },
            { speaker: '', text: '林若曦的脸色瞬间白了。', effect: '' },
            { speaker: '林若曦', text: '你...你胡说！', effect: 'tremble' },
            { speaker: '陈默', text: '你有动机。你父亲修改了遗嘱，把大部分财产留给了别人。如果他死了，你至少还能分到一部分。', effect: '' },
            { speaker: '陈默', text: '而且你是学建筑的，对房屋结构很了解，设计一个密室机关对你来说不难。', effect: '' },
            { speaker: '林若曦', text: '就凭这些？', effect: '' },
            { speaker: '陈默', text: '当然不止。案发当晚，你真的在房间里睡觉吗？', effect: '' },
            { speaker: '', text: '林若曦的嘴唇颤抖着，说不出话来。', effect: '' },
            { speaker: '老周', text: '陈先生！小姐那天晚上确实在房间里！我可以作证！', effect: '' },
            { speaker: '陈默', text: '（老周为什么这么激动...？）', effect: '' }
        ],
        onEnter: function() { setFlag('accused_linruoxi', true); },
        choices: [
            { text: '坚持指认林若曦', nextScene: 'accuse_linruoxi_continue' },
            { text: '转向怀疑老周', nextScene: 'accuse_zhou' },
            { text: '重新思考', nextScene: 'final_confrontation' }
        ]
    },
    
    accuse_linruoxi_continue: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        character: { name: '林若曦', position: 'right', color: '#2a2a3a' },
        dialogs: [
            { speaker: '陈默', text: '林小姐，事到如今，你还要隐瞒吗？', effect: '' },
            { speaker: '', text: '林若曦沉默了很久，终于抬起头。', effect: '' },
            { speaker: '林若曦', text: '...好，我承认。', effect: '' },
            { speaker: '林若曦', text: '那天晚上，我确实不在房间里。', effect: '' },
            { speaker: '张警官', text: '什么？！', effect: '' },
            { speaker: '林若曦', text: '我...我去见了一个人。', effect: '' },
            { speaker: '陈默', text: '谁？', effect: '' },
            { speaker: '林若曦', text: '...我不能说。', effect: '' },
            { speaker: '林若曦', text: '但我发誓，我没有杀我父亲！我去见的人也跟案子没关系！', effect: 'tremble' },
            { speaker: '陈默', text: '（...她的样子不像是在说谎。）', effect: '' },
            { speaker: '陈默', text: '（难道...我猜错了？）', effect: '' }
        ],
        onEnter: function() { changeSan(-10); },
        choices: [
            { text: '相信她，换个方向', nextScene: 'accuse_zhou' },
            { text: '不相信，继续逼问', nextScene: 'ending_wrong_accusation' }
        ]
    },
    
    accuse_zhou: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        character: { name: '老周', position: 'left', color: '#3d3d29' },
        dialogs: [
            { speaker: '陈默', text: '老周，凶手是你。', effect: '' },
            { speaker: '', text: '老周的表情没有太大变化，只是眼神沉了沉。', effect: '' },
            { speaker: '老周', text: '...陈先生，您说笑了。我为什么要杀林总？', effect: '' },
            { speaker: '陈默', text: '因为三十年前的事。', effect: '' },
            { speaker: '', text: '老周的身体猛地一震。', effect: '' },
            { speaker: '陈默', text: '陈建国...你跟他是什么关系？', effect: '' },
            { speaker: '老周', text: '...', effect: '' },
            { speaker: '陈默', text: '你跟林国栋、陈建国，当年是一起的吧？', effect: '' },
            { speaker: '陈默', text: '陈建国死了之后，林国栋发了家，而你...成了他的管家。', effect: '' },
            { speaker: '陈默', text: '你忍了三十年，就是为了今天？', effect: '' },
            { speaker: '老周', text: '...', effect: '' },
            { speaker: '', text: '老周沉默了很久，然后缓缓开口。', effect: '' },
            { speaker: '老周', text: '陈先生，您很聪明。但您猜错了。', effect: '' },
            { speaker: '老周', text: '我确实恨过林总。但我不会杀他。', effect: '' },
            { speaker: '老周', text: '因为...他已经在赎罪了。', effect: '' }
        ],
        onEnter: function() { setFlag('accused_zhou', true); },
        choices: [
            { text: '「赎罪？什么意思？」', nextScene: 'zhou_redemption' },
            { text: '不相信，继续指认', nextScene: 'ending_wrong_accusation' }
        ]
    },
    
    zhou_redemption: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        character: { name: '老周', position: 'left', color: '#3d3d29' },
        dialogs: [
            { speaker: '老周', text: '三十年前那件事...是林总这辈子最大的心病。', effect: '' },
            { speaker: '老周', text: '这些年，他一直在想办法补偿。', effect: '' },
            { speaker: '陈默', text: '补偿谁？', effect: '' },
            { speaker: '老周', text: '...建国的孩子。', effect: '' },
            { speaker: '老周', text: '建国走了之后，留下一个儿子。那孩子...是林总一直在暗中抚养。', effect: '' },
            { speaker: '林若曦', text: '什么？！', effect: '' },
            { speaker: '老周', text: '小姐，你不知道也正常。林总一直没敢告诉你。', effect: '' },
            { speaker: '老周', text: '这次修改遗嘱...也是为了那孩子。他想把一半的财产留给建国的儿子。', effect: '' },
            { speaker: '陈默', text: '（...）', effect: '' },
            { speaker: '陈默', text: '（那孩子...现在在哪？）', effect: '' },
            { speaker: '陈默', text: '（如果他知道了自己父亲的死因...会不会...）', effect: '' },
            { speaker: '', text: '突然，你想到了什么。', effect: '' },
            { speaker: '陈默', text: '！', effect: '' },
            { speaker: '陈默', text: '（那个神秘电话...还有...）', effect: '' },
            { speaker: '陈默', text: '老周，你儿子...叫什么名字？', effect: '' },
            { speaker: '老周', text: '...', effect: '' },
            { speaker: '老周', text: '他叫周明。', effect: '' },
            { speaker: '陈默', text: '（周明...周明...）', effect: '' },
            { speaker: '陈默', text: '（等等，陈建国的儿子...如果跟着母姓...或者...）', effect: '' },
            { speaker: '陈默', text: '（不对，老周的儿子...难道说——）', effect: '' }
        ],
        onEnter: function() { setFlag('know_zhou_ming', true); addClue('illegitimate_child'); },
        autoNext: 'truth_reveal'
    },
    
    accuse_zhao: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        character: { name: '赵律师', position: 'right', color: '#2d3748' },
        dialogs: [
            { speaker: '陈默', text: '赵律师，凶手是你。', effect: '' },
            { speaker: '', text: '赵律师愣住了，然后苦笑了一下。', effect: '' },
            { speaker: '赵律师', text: '陈默，你开玩笑吧？是我找你来查案的。', effect: '' },
            { speaker: '陈默', text: '贼喊捉贼，不是很常见吗？', effect: '' },
            { speaker: '陈默', text: '你是林国栋的私人律师，知道他所有的秘密。如果他死了，你能拿到不少好处吧？', effect: '' },
            { speaker: '赵律师', text: '...', effect: '' },
            { speaker: '陈默', text: '而且，你是第一个发现遗嘱有问题的人。你完全有机会...', effect: '' },
            { speaker: '赵律师', text: '够了。', effect: '' },
            { speaker: '', text: '赵律师的表情变得严肃起来。', effect: '' },
            { speaker: '赵律师', text: '陈默，我认识你多少年了？你觉得我是那种人吗？', effect: '' },
            { speaker: '赵律师', text: '我找你来，是因为我真的想知道真相。林总是我的朋友。', effect: '' },
            { speaker: '陈默', text: '（...）', effect: '' },
            { speaker: '陈默', text: '（他的眼神...很真诚。）', effect: '' },
            { speaker: '陈默', text: '（难道我真的猜错了？）', effect: '' }
        ],
        onEnter: function() { setFlag('accused_zhao', true); changeSan(-5); },
        choices: [
            { text: '道歉，换个方向', nextScene: 'accuse_zhou' },
            { text: '坚持指认', nextScene: 'ending_wrong_accusation' }
        ]
    },
    
    accuse_other: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        dialogs: [
            { speaker: '陈默', text: '凶手不在我们中间。', effect: '' },
            { speaker: '张警官', text: '什么意思？', effect: '' },
            { speaker: '陈默', text: '我的意思是...凶手另有其人。一个我们都没注意到的人。', effect: '' },
            { speaker: '陈默', text: '老周，你儿子...最近有没有回来过？', effect: '' },
            { speaker: '', text: '老周的脸色瞬间变了。', effect: '' },
            { speaker: '老周', text: '...你怎么知道我有儿子？', effect: '' },
            { speaker: '陈默', text: '查案的时候听说的。他叫什么？', effect: '' },
            { speaker: '老周', text: '...周明。', effect: '' },
            { speaker: '陈默', text: '周明...他今年多大？', effect: '' },
            { speaker: '老周', text: '二十八。', effect: '' },
            { speaker: '陈默', text: '（二十八岁...三十年前陈建国死的时候，他还没出生...）', effect: '' },
            { speaker: '陈默', text: '（不对...如果是遗腹子的话...）', effect: '' },
            { speaker: '陈默', text: '老周，周明...真的是你的儿子吗？', effect: '' },
            { speaker: '', text: '这句话一出，老周的身体晃了晃。', effect: '' },
            { speaker: '老周', text: '你...你什么意思？', effect: 'tremble' },
            { speaker: '陈默', text: '我的意思是...周明的亲生父亲，会不会是...陈建国？', effect: '' },
            { speaker: '', text: '客厅里一片死寂。', effect: '' }
        ],
        onEnter: function() { setFlag('suspect_zhou_ming', true); },
        autoNext: 'truth_reveal'
    },
    
    truth_reveal: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        dialogs: [
            { speaker: '老周', text: '...你都查到了。', effect: '' },
            { speaker: '陈默', text: '所以，周明是陈建国的儿子？', effect: '' },
            { speaker: '老周', text: '...是。', effect: '' },
            { speaker: '老周', text: '建国走的时候，他媳妇已经怀了孕。后来她也走了，孩子就由我来养。', effect: '' },
            { speaker: '老周', text: '我没告诉他真相...我不想让他活在仇恨里。', effect: '' },
            { speaker: '陈默', text: '但他还是知道了。', effect: '' },
            { speaker: '老周', text: '...', effect: '' },
            { speaker: '老周', text: '半年前，他不知道从哪知道了这件事。然后...就变了。', effect: '' },
            { speaker: '老周', text: '他开始打听当年的事，还说要找林总"算账"。', effect: '' },
            { speaker: '老周', text: '我拦过他...但拦不住。', effect: '' },
            { speaker: '陈默', text: '所以...人是他杀的？', effect: '' },
            { speaker: '老周', text: '不！', effect: '' },
            { speaker: '老周', text: '不是他！', effect: 'tremble' },
            { speaker: '老周', text: '那天晚上...是我让他来的别墅。但他只是想跟林总谈谈。', effect: '' },
            { speaker: '老周', text: '他们谈了很久...然后周明就走了。那时候林总还好好的！', effect: '' },
            { speaker: '陈默', text: '（...）', effect: '' },
            { speaker: '陈默', text: '（如果周明走的时候林国栋还活着...那凶手是谁？）', effect: '' },
            { speaker: '陈默', text: '（等等...那天晚上还有谁在别墅？）', effect: '' },
            { speaker: '', text: '你看向了林若曦。', effect: '' },
            { speaker: '陈默', text: '林小姐，那天晚上...你也见过周明，对吗？', effect: '' },
            { speaker: '', text: '林若曦的脸瞬间没了血色。', effect: '' },
            { speaker: '林若曦', text: '我...我...', effect: 'tremble' }
        ],
        onEnter: function() { setFlag('truth_revealed', true); },
        autoNext: 'final_choice'
    },
    
    final_choice: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        dialogs: [
            { speaker: '林若曦', text: '我和周明...我们认识很久了。', effect: '' },
            { speaker: '林若曦', text: '我们是...恋人。', effect: '' },
            { speaker: '', text: '客厅里一片哗然。', effect: '' },
            { speaker: '林若曦', text: '那天晚上，他来别墅...一部分是为了见我父亲，一部分...是为了见我。', effect: '' },
            { speaker: '林若曦', text: '他走了之后，我去书房找过我父亲...', effect: '' },
            { speaker: '陈默', text: '然后呢？', effect: '' },
            { speaker: '林若曦', text: '我们吵了一架。很凶。', effect: '' },
            { speaker: '林若曦', text: '他说他不会同意我跟周明在一起。还说...周明是仇人的儿子。', effect: '' },
            { speaker: '林若曦', text: '我很生气，就跑回了房间。', effect: '' },
            { speaker: '林若曦', text: '那时候...那时候他还活着！真的！', effect: 'tremble' },
            { speaker: '陈默', text: '（...）', effect: '' },
            { speaker: '陈默', text: '（如果林若曦和周明都不是凶手...那是谁？）', effect: '' },
            { speaker: '陈默', text: '（等等...还有一个人。）', effect: '' },
            { speaker: '陈默', text: '（第一个发现尸体的人...）', effect: '' },
            { speaker: '', text: '你猛地看向老周。', effect: '' },
            { speaker: '陈默', text: '老周...', effect: '' },
            { speaker: '老周', text: '...', effect: '' },
            { speaker: '陈默', text: '周明走了之后，你又去了书房，对吗？', effect: '' },
            { speaker: '', text: '老周缓缓闭上了眼睛。', effect: '' },
            { speaker: '老周', text: '...是。', effect: '' },
            { speaker: '老周', text: '我进去的时候...林总已经喝了很多酒，吃了药，趴在桌上。', effect: '' },
            { speaker: '老周', text: '他看到我，说他对不起建国，对不起周明...', effect: '' },
            { speaker: '老周', text: '他说他想赎罪...但不知道怎么赎。', effect: '' },
            { speaker: '陈默', text: '然后你就...', effect: '' },
            { speaker: '老周', text: '我没有杀他！', effect: 'tremble' },
            { speaker: '老周', text: '我只是...我只是把安眠药...又给他喂了几片...', effect: 'tremble' },
            { speaker: '老周', text: '我想让他睡得更沉一点...第二天醒过来就没事了...', effect: 'tremble' },
            { speaker: '老周', text: '我没想到...我没想到他已经吃了那么多了...', effect: 'tremble' },
            { speaker: '', text: '老周的声音越来越小，最后变成了喃喃自语。', effect: '' },
            { speaker: '老周', text: '我只是想帮他...我只是想让他睡个好觉...', effect: 'tremble' },
            { speaker: '陈默', text: '（...）', effect: '' },
            { speaker: '陈默', text: '（所以...这到底是意外，还是谋杀？）', effect: '' },
            { speaker: '陈默', text: '（老周...是故意的吗？）', effect: '' },
            { speaker: '', text: '你看着眼前这个老人，心里五味杂陈。', effect: '' },
            { speaker: '', text: '现在，轮到你做最后的选择了。', effect: '' }
        ],
        choices: [
            { text: '公开全部真相，让法律裁决', nextScene: 'ending_A' },
            { text: '隐瞒部分事实，给老周一个体面', nextScene: 'ending_B' },
            { text: '什么都不说，让案子继续是"自杀"', nextScene: 'ending_C' }
        ]
    },
    
    ending_wrong_accusation: {
        background: 'villa_living',
        bgColor: '#1f1a14',
        dialogs: [
            { speaker: '张警官', text: '陈默，你到底有没有证据？', effect: '' },
            { speaker: '张警官', text: '没有证据就别在这瞎猜！', effect: '' },
            { speaker: '', text: '你张了张嘴，却什么都说不出来。', effect: '' },
            { speaker: '陈默', text: '（...我太急躁了。）', effect: '' },
            { speaker: '陈默', text: '（证据还不够...我需要更多时间。）', effect: '' },
            { speaker: '张警官', text: '行了，别在这捣乱了。案子已经结了，就是自杀。', effect: '' },
            { speaker: '', text: '张警官带人走了。', effect: '' },
            { speaker: '', text: '你站在原地，看着窗外的雨。', effect: '' },
            { speaker: '陈默', text: '（...真相，到底是什么？）', effect: '' }
        ],
        autoNext: 'ending_C'
    },
    
    // ==================== 结局 ====================
    ending_A: {
        background: 'rain_street',
        bgColor: '#0a0a12',
        isEnding: true,
        endingTitle: '结局 A：真相大白',
        endingText: `你选择了公开全部真相。

老周因过失致人死亡被起诉。考虑到他的主观恶意较小，且有自首情节，最终被判了三年。

周明得知真相后，沉默了很久。他说他不恨老周，也不恨林国栋了。
他只是觉得...这一切都太荒谬了。

林若曦和周明最终还是分开了。横亘在他们之间的东西太多了。

至于你...
你把这个案子的卷宗锁进了抽屉最深处。

雨还在下。
这个城市里，还有多少这样的故事，被雨水冲刷着，慢慢被遗忘...

——真相有时候，比谎言更让人沉重。`
    },
    
    ending_B: {
        background: 'rain_street',
        bgColor: '#0a0a12',
        isEnding: true,
        endingTitle: '结局 B：沉默的正义',
        endingText: `你选择了隐瞒。

你告诉警方，林国栋确实是自杀。
至于密室的手法、老周做过的事...你一个字都没提。

老周知道后，给你磕了一个头。
他说他会用剩下的日子，好好赎罪。

周明和林若曦...他们离开了这座城市。
临走前，周明给你发了一条短信："谢谢。"

你不知道自己做得对不对。
法律之外的正义...真的是正义吗？

窗外的雨还在下。
你拿起酒杯，一饮而尽。

——有些真相，注定要被埋葬。
而你，成了守墓人。`
    },
    
    ending_C: {
        background: 'rain_street',
        bgColor: '#0a0a12',
        isEnding: true,
        endingTitle: '结局 C：迷雾重重',
        endingText: `最终，你还是没能找到确凿的证据。

案子维持了"自杀"的结论。
你把所有的线索和猜想，都锁进了抽屉里。

老周还是那个老管家，继续守着那栋空荡荡的别墅。
周明和林若曦...没人知道他们去了哪里。

只有你知道，这个案子背后，藏着多少秘密。
但你没有证据，什么都做不了。

雨还在下。
你站在窗前，看着外面模糊的世界。

真相是什么？
也许...这个世界上，本来就没有绝对的真相。

——迷雾散去之后，还是迷雾。`
    },
    
    ending_D: {
        background: 'darkness',
        bgColor: '#000000',
        isEnding: true,
        endingTitle: '结局 D：坠入深渊',
        endingText: `你的理智...终于撑不住了。

这个案子太复杂了。
谎言套着谎言，秘密连着秘密。

你开始分不清什么是真的，什么是假的。
你开始怀疑身边的每一个人。
甚至...怀疑你自己。

三年前那场事故的记忆，开始不断闪回。
你想起了很多事...又好像什么都想不起来。

雨还在下。
但你已经听不到了。

——当你凝视深渊的时候，深渊也在凝视着你。
而你...终究还是掉下去了。`
    },
    
    ending_E: {
        background: 'office',
        bgColor: '#1a1a2e',
        isEnding: true,
        endingTitle: '结局 E：庸碌人生',
        endingText: `你拒绝了委托。

赵律师叹了口气，走了。

你继续过着你的日子。
找猫，找狗，抓小三...

日子就这么一天天过去。
你偶尔会在报纸上看到林国栋的名字，
但也只是扫一眼就翻过去了。

雨还在下。
你的生活，什么都没有改变。

——有些故事，从一开始就与你无关。`
    }
};

// ==================== 游戏状态 ====================
let gameState = {
    currentScene: 'start',
    currentDialogIndex: 0,
    hp: 100,
    san: 100,
    clues: {},
    favorability: {
        linruoxi: 50,
        zhao: 50,
        zhou: 50
    },
    flags: {},
    isTyping: false,
    textSpeed: 50,
    volume: 70,
    autoPlay: true,
    rainEffect: true,
    currentClueTab: 'physical',
    saveMode: 'save', // 'save' or 'load'
    deductionAnswered: false
};

// ==================== 雨滴效果 ====================
const rainCanvas = document.getElementById('rainCanvas');
const rainCtx = rainCanvas.getContext('2d');
let rainDrops = [];
let rainAnimationId = null;

function initRain() {
    rainCanvas.width = window.innerWidth;
    rainCanvas.height = window.innerHeight;
    
    rainDrops = [];
    for (let i = 0; i < 150; i++) {
        rainDrops.push({
            x: Math.random() * rainCanvas.width,
            y: Math.random() * rainCanvas.height,
            length: Math.random() * 20 + 10,
            speed: Math.random() * 10 + 10,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    if (gameState.rainEffect) {
        animateRain();
    }
}

function animateRain() {
    rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    
    rainCtx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
    rainCtx.lineWidth = 1;
    
    for (let i = 0; i < rainDrops.length; i++) {
        const drop = rainDrops[i];
        rainCtx.beginPath();
        rainCtx.moveTo(drop.x, drop.y);
        rainCtx.lineTo(drop.x, drop.y + drop.length);
        rainCtx.globalAlpha = drop.opacity;
        rainCtx.stroke();
        
        drop.y += drop.speed;
        
        if (drop.y > rainCanvas.height) {
            drop.y = -drop.length;
            drop.x = Math.random() * rainCanvas.width;
        }
    }
    
    rainCtx.globalAlpha = 1;
    
    if (gameState.rainEffect) {
        rainAnimationId = requestAnimationFrame(animateRain);
    }
}

function toggleRain(enabled) {
    gameState.rainEffect = enabled;
    if (enabled) {
        if (!rainAnimationId) {
            animateRain();
        }
    } else {
        if (rainAnimationId) {
            cancelAnimationFrame(rainAnimationId);
            rainAnimationId = null;
        }
        rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    }
}

window.addEventListener('resize', () => {
    rainCanvas.width = window.innerWidth;
    rainCanvas.height = window.innerHeight;
});

// ==================== 音效系统 ====================
let audioContext = null;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playClickSound() {
    if (!audioContext || gameState.volume === 0) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(gameState.volume / 100 * 0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function playThunderSound() {
    if (!audioContext || gameState.volume === 0) return;
    
    const bufferSize = audioContext.sampleRate * 2;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 200;
    
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(gameState.volume / 100 * 0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
    
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    noise.start();
}

// ==================== 核心游戏函数 ====================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startNewGame() {
    initAudio();
    playClickSound();
    
    gameState = {
        currentScene: 'start',
        currentDialogIndex: 0,
        hp: 100,
        san: 100,
        clues: {},
        favorability: {
            linruoxi: 50,
            zhao: 50,
            zhou: 50
        },
        flags: {},
        isTyping: false,
        textSpeed: gameState.textSpeed,
        volume: gameState.volume,
        autoPlay: gameState.autoPlay,
        rainEffect: gameState.rainEffect,
        currentClueTab: 'physical',
        saveMode: 'save',
        deductionAnswered: false
    };
    
    showScreen('gameScreen');
    loadScene('start');
}

function loadScene(sceneId) {
    const scene = scenes[sceneId];
    if (!scene) {
        console.error('Scene not found:', sceneId);
        return;
    }
    
    gameState.currentScene = sceneId;
    gameState.currentDialogIndex = 0;
    gameState.deductionAnswered = false;
    
    // 执行进入场景的回调
    if (scene.onEnter) {
        scene.onEnter();
    }
    
    // 检查是否是结局
    if (scene.isEnding) {
        showEnding(scene);
        return;
    }
    
    // 检查是否是推理环节
    if (scene.isDeduction) {
        showDeduction(scene);
        return;
    }
    
    // 设置背景
    updateBackground(scene);
    
    // 设置角色立绘
    updateCharacter(scene);
    
    // 清空选项
    document.getElementById('choicesContainer').innerHTML = '';
    
    // 显示第一句对话
    showDialog();
    
    // 更新状态栏
    updateStatusBar();
}

function updateBackground(scene) {
    const bgElement = document.getElementById('background');
    
    // 使用渐变色作为背景（因为没有图片）
    if (scene.bgColor) {
        bgElement.style.background = `linear-gradient(180deg, ${scene.bgColor} 0%, #0a0a12 100%)`;
    } else {
        bgElement.style.background = 'linear-gradient(180deg, #1a1a2e 0%, #0a0a12 100%)';
    }
    
    // 添加场景名称文字
    const sceneNames = {
        'office': '侦探事务所',
        'villa_entrance': '别墅门口',
        'study_room': '书房',
        'garden': '后花园',
        'living_room': '客厅',
        'villa_living': '别墅客厅',
        'company': '林氏地产',
        'old_town': '老城区',
        'hospital': '医院',
        'street': '街道',
        'rain_street': '雨中街道',
        'darkness': '...'
    };
    
    // 可以在背景上添加场景名
    bgElement.style.position = 'relative';
}

// 角色立绘图片映射
const characterImages = {
    '赵律师': 'zhao_lawyer.png',
    '老周': 'lao_zhou.png',
    '林若曦': 'lin_ruoxi.png',
    '王秘书': 'wang_secretary.png',
    '李医生': 'li_doctor.png',
    '老邻居': 'old_neighbor.png',
    '周明': 'zhou_ming.png',
    '张警官': 'zhang_police.png'
};

function updateCharacter(scene) {
    const charLayer = document.getElementById('characterLayer');
    charLayer.innerHTML = '';
    
    if (scene.character) {
        const char = scene.character;
        const charDiv = document.createElement('div');
        charDiv.className = `character-sprite character-${char.position || 'center'}`;
        
        const imageFile = characterImages[char.name];
        if (imageFile) {
            // 使用真正的立绘图片
            charDiv.innerHTML = `<img src="images/${imageFile}" alt="${char.name}">`;
        } else {
            // 后备：使用简约占位符
            charDiv.innerHTML = `
                <div class="character-placeholder" style="background: linear-gradient(180deg, ${char.color || '#2a2a3a'}88 0%, ${char.color || '#2a2a3a'}cc 100%);">
                    <div class="char-name">${char.name}</div>
                </div>
            `;
        }
        
        charLayer.appendChild(charDiv);
    }
}

function showDialog() {
    const scene = scenes[gameState.currentScene];
    const dialogs = scene.dialogs;
    
    if (gameState.currentDialogIndex >= dialogs.length) {
        // 对话结束
        if (scene.autoNext) {
            setTimeout(() => loadScene(scene.autoNext), 500);
        } else if (scene.choices && scene.choices.length > 0) {
            showChoices(scene.choices);
        }
        return;
    }
    
    const dialog = dialogs[gameState.currentDialogIndex];
    const speakerNameEl = document.getElementById('speakerName');
    const dialogTextEl = document.getElementById('dialogText');
    
    // 设置说话人
    speakerNameEl.textContent = dialog.speaker || '';
    speakerNameEl.style.display = dialog.speaker ? 'block' : 'none';
    
    // 设置文字效果
    dialogTextEl.className = 'dialog-text';
    if (dialog.effect === 'tremble') {
        dialogTextEl.classList.add('tremble');
    } else if (dialog.effect === 'highlight-red') {
        dialogTextEl.classList.add('highlight-red');
    }
    
    // 打字机效果
    typeText(dialog.text);
}

function typeText(text) {
    const dialogTextEl = document.getElementById('dialogText');
    gameState.isTyping = true;
    dialogTextEl.textContent = '';
    
    let index = 0;
    const speed = 110 - gameState.textSpeed; // 速度反向：值越大越快
    
    function type() {
        if (index < text.length) {
            dialogTextEl.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            gameState.isTyping = false;
        }
    }
    
    type();
}

function skipTyping() {
    const scene = scenes[gameState.currentScene];
    const dialog = scene.dialogs[gameState.currentDialogIndex];
    const dialogTextEl = document.getElementById('dialogText');
    
    dialogTextEl.textContent = dialog.text;
    gameState.isTyping = false;
}

function nextDialog() {
    playClickSound();
    
    if (gameState.isTyping) {
        skipTyping();
        return;
    }
    
    gameState.currentDialogIndex++;
    showDialog();
}

function showChoices(choices) {
    const container = document.getElementById('choicesContainer');
    container.innerHTML = '';
    
    choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice.text;
        btn.onclick = () => selectChoice(choice);
        container.appendChild(btn);
    });
}

function selectChoice(choice) {
    playClickSound();
    
    // 应用效果
    if (choice.effects) {
        if (choice.effects.hp) {
            changeHp(choice.effects.hp);
        }
        if (choice.effects.san) {
            changeSan(choice.effects.san);
        }
        if (choice.effects.clue) {
            addClue(choice.effects.clue);
        }
        if (choice.effects.favorability) {
            for (const [char, value] of Object.entries(choice.effects.favorability)) {
                changeFavorability(char, value);
            }
        }
        if (choice.effects.flag) {
            setFlag(choice.effects.flag, true);
        }
    }
    
    // 跳转到下一个场景
    if (choice.nextScene) {
        loadScene(choice.nextScene);
    }
}

// ==================== 属性系统 ====================

function changeHp(amount) {
    gameState.hp = Math.max(0, Math.min(100, gameState.hp + amount));
    updateStatusBar();
    
    if (gameState.hp <= 0) {
        // Game Over
        loadScene('ending_D');
    }
}

function changeSan(amount) {
    gameState.san = Math.max(0, Math.min(100, gameState.san + amount));
    updateStatusBar();
    
    if (gameState.san <= 0) {
        loadScene('ending_D');
    }
}

function changeFavorability(char, amount) {
    if (!gameState.favorability[char]) {
        gameState.favorability[char] = 50;
    }
    gameState.favorability[char] = Math.max(0, Math.min(100, gameState.favorability[char] + amount));
}

function updateStatusBar() {
    document.getElementById('hpBar').style.width = gameState.hp + '%';
    document.getElementById('hpText').textContent = gameState.hp;
    document.getElementById('sanBar').style.width = gameState.san + '%';
    document.getElementById('sanText').textContent = gameState.san;
    document.getElementById('clueCount').textContent = Object.keys(gameState.clues).length;
}

// ==================== 线索系统 ====================

function addClue(clueId) {
    if (!gameState.clues[clueId] && clueDatabase[clueId]) {
        gameState.clues[clueId] = true;
        updateStatusBar();
    }
}

function openClueBook() {
    playClickSound();
    initAudio();
    document.getElementById('clueBookScreen').classList.add('active');
    switchClueTab('physical');
}

function closeClueBook() {
    playClickSound();
    document.getElementById('clueBookScreen').classList.remove('active');
}

function switchClueTab(tab, element) {
    gameState.currentClueTab = tab;
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    } else {
        // 如果没有传入element，找到对应的按钮并添加active
        const tabs = document.querySelectorAll('.tab-btn');
        const tabMap = { 'physical': 0, 'testimony': 1, 'document': 2 };
        if (tabs[tabMap[tab]]) {
            tabs[tabMap[tab]].classList.add('active');
        }
    }
    
    renderClueList();
}

function renderClueList() {
    const listEl = document.getElementById('clueList');
    listEl.innerHTML = '';
    
    const tab = gameState.currentClueTab;
    const clues = Object.keys(gameState.clues).filter(id => clueDatabase[id]?.type === tab);
    
    if (clues.length === 0) {
        listEl.innerHTML = '<div class="clue-empty">暂无线索</div>';
        return;
    }
    
    clues.forEach(clueId => {
        const clue = clueDatabase[clueId];
        const item = document.createElement('div');
        item.className = 'clue-item';
        item.innerHTML = `
            <h4>${clue.name}</h4>
            <p>${clue.description}</p>
        `;
        listEl.appendChild(item);
    });
}

// ==================== 推理系统 ====================

function showDeduction(scene) {
    const screen = document.getElementById('deductionScreen');
    screen.classList.add('active');
    
    document.getElementById('deductionQuestion').textContent = scene.deductionQuestion;
    
    const optionsEl = document.getElementById('deductionOptions');
    optionsEl.innerHTML = '';
    
    const resultEl = document.getElementById('deductionResult');
    resultEl.classList.remove('show', 'correct', 'wrong');
    resultEl.textContent = '';
    
    scene.deductionOptions.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'deduction-option';
        btn.textContent = option.text;
        btn.onclick = () => answerDeduction(option, scene, btn);
        optionsEl.appendChild(btn);
    });
}

function answerDeduction(option, scene, btn) {
    if (gameState.deductionAnswered) return;
    gameState.deductionAnswered = true;
    
    playClickSound();
    
    const resultEl = document.getElementById('deductionResult');
    resultEl.classList.add('show');
    
    if (option.correct) {
        btn.classList.add('correct');
        resultEl.classList.add('correct');
        resultEl.textContent = scene.correctText || '回答正确！';
        
        if (option.reward) {
            if (option.reward.san) changeSan(option.reward.san);
            if (option.reward.hp) changeHp(option.reward.hp);
        }
    } else {
        btn.classList.add('wrong');
        resultEl.classList.add('wrong');
        resultEl.textContent = scene.wrongText || '回答错误...';
        
        if (option.penalty) {
            if (option.penalty.san) changeSan(option.penalty.san);
            if (option.penalty.hp) changeHp(option.penalty.hp);
        }
    }
    
    // 延迟后继续
    setTimeout(() => {
        document.getElementById('deductionScreen').classList.remove('active');
        if (scene.nextScene) {
            loadScene(scene.nextScene);
        }
    }, 3000);
}

// ==================== 存档系统 ====================

function openSaveScreen() {
    playClickSound();
    initAudio();
    gameState.saveMode = 'save';
    document.getElementById('saveTitle').textContent = '存档';
    renderSaveSlots();
    document.getElementById('saveScreen').classList.add('active');
}

function openLoadScreen() {
    playClickSound();
    initAudio();
    gameState.saveMode = 'load';
    document.getElementById('saveTitle').textContent = '读档';
    renderSaveSlots();
    document.getElementById('saveScreen').classList.add('active');
}

function closeSaveScreen() {
    playClickSound();
    document.getElementById('saveScreen').classList.remove('active');
}

function renderSaveSlots() {
    const container = document.getElementById('saveSlots');
    container.innerHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        const saveData = localStorage.getItem(`foggyRain_save_${i}`);
        const slot = document.createElement('div');
        slot.className = 'save-slot';
        
        if (saveData) {
            try {
                const data = JSON.parse(saveData);
                const chapter = getChapterName(data.currentScene);
                const time = new Date(data.saveTime).toLocaleString('zh-CN');
                
                slot.innerHTML = `
                    <div class="save-slot-info">
                        <div class="save-slot-chapter">存档 ${i} - ${chapter}</div>
                        <div class="save-slot-time">${time}</div>
                    </div>
                    <button class="save-slot-delete" onclick="deleteSave(${i}); event.stopPropagation();">删除</button>
                `;
                
                slot.onclick = () => {
                    if (gameState.saveMode === 'save') {
                        saveGame(i);
                    } else {
                        loadGame(i);
                    }
                };
            } catch (e) {
                slot.classList.add('empty');
                slot.textContent = `存档 ${i} - 空`;
                slot.onclick = () => {
                    if (gameState.saveMode === 'save') {
                        saveGame(i);
                    }
                };
            }
        } else {
            slot.classList.add('empty');
            slot.textContent = `存档 ${i} - 空`;
            slot.onclick = () => {
                if (gameState.saveMode === 'save') {
                    saveGame(i);
                }
            };
        }
        
        container.appendChild(slot);
    }
}

function getChapterName(sceneId) {
    const chapterMap = {
        'start': '第一章 雨夜委托',
        'zhao_arrives': '第一章 雨夜委托',
        'arrive_villa': '第二章 别墅调查',
        'study_room': '第二章 别墅调查',
        'choose_investigation': '第三章 深入调查',
        'company_investigation': '第三章 深入调查',
        'old_town_investigation': '第三章 深入调查',
        'hospital_investigation': '第三章 深入调查',
        'final_confrontation': '第四章 真相逼近',
        'ending_A': '结局 A',
        'ending_B': '结局 B',
        'ending_C': '结局 C',
        'ending_D': '结局 D',
        'ending_E': '结局 E'
    };
    return chapterMap[sceneId] || '游戏中';
}

function saveGame(slot) {
    playClickSound();
    
    const saveData = {
        ...gameState,
        saveTime: Date.now()
    };
    
    localStorage.setItem(`foggyRain_save_${slot}`, JSON.stringify(saveData));
    renderSaveSlots();
    
    // 提示保存成功
    alert('存档成功！');
}

function loadGame(slot) {
    playClickSound();
    
    const saveData = localStorage.getItem(`foggyRain_save_${slot}`);
    if (!saveData) return;
    
    try {
        const data = JSON.parse(saveData);
        gameState = { ...gameState, ...data };
        
        closeSaveScreen();
        showScreen('gameScreen');
        loadScene(gameState.currentScene);
    } catch (e) {
        alert('存档损坏，无法读取。');
    }
}

function deleteSave(slot) {
    if (confirm('确定要删除这个存档吗？')) {
        localStorage.removeItem(`foggyRain_save_${slot}`);
        renderSaveSlots();
    }
}

function autoSave() {
    const saveData = {
        ...gameState,
        saveTime: Date.now()
    };
    localStorage.setItem('foggyRain_autosave', JSON.stringify(saveData));
}

// ==================== 设置系统 ====================

function openSettings() {
    playClickSound();
    initAudio();
    document.getElementById('settingsScreen').classList.add('active');
    
    document.getElementById('textSpeed').value = gameState.textSpeed;
    document.getElementById('volume').value = gameState.volume;
    document.getElementById('autoPlay').checked = gameState.autoPlay;
    document.getElementById('rainEffect').checked = gameState.rainEffect;
}

function closeSettings() {
    playClickSound();
    document.getElementById('settingsScreen').classList.remove('active');
}

// ==================== 结局系统 ====================

function showEnding(scene) {
    showScreen('endingScreen');
    document.getElementById('endingTitle').textContent = scene.endingTitle;
    document.getElementById('endingText').textContent = scene.endingText;
    
    // 播放雷声增加氛围
    setTimeout(() => playThunderSound(), 500);
}

function backToTitle() {
    playClickSound();
    showScreen('titleScreen');
}

function showAbout() {
    playClickSound();
    document.getElementById('aboutScreen').classList.add('active');
}

function closeAbout() {
    playClickSound();
    document.getElementById('aboutScreen').classList.remove('active');
}

// ==================== 标记系统 ====================

function setFlag(flag, value) {
    gameState.flags[flag] = value;
}

function getFlag(flag) {
    return gameState.flags[flag] || false;
}

// ==================== 事件绑定 ====================

// 点击对话框推进对话
document.getElementById('dialogBox').addEventListener('click', nextDialog);

// 键盘控制
document.addEventListener('keydown', (e) => {
    if (document.getElementById('gameScreen').classList.contains('active')) {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            nextDialog();
        } else if (e.code === 'Escape') {
            openSettings();
        }
    }
});

// 设置滑块事件
document.getElementById('textSpeed').addEventListener('input', (e) => {
    gameState.textSpeed = parseInt(e.target.value);
});

document.getElementById('volume').addEventListener('input', (e) => {
    gameState.volume = parseInt(e.target.value);
});

document.getElementById('autoPlay').addEventListener('change', (e) => {
    gameState.autoPlay = e.target.checked;
});

document.getElementById('rainEffect').addEventListener('change', (e) => {
    toggleRain(e.target.checked);
});

// ==================== 初始化 ====================

window.onload = function() {
    initRain();
    
    // 检查是否有自动存档
    const autosave = localStorage.getItem('foggyRain_autosave');
    if (autosave) {
        // 可以在标题界面显示"继续游戏"按钮
    }
    
    // 偶尔播放雷声
    setInterval(() => {
        if (gameState.rainEffect && Math.random() < 0.1) {
            playThunderSound();
        }
    }, 15000);
};
