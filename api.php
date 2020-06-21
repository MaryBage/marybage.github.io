<?php


$planets = [
			'Monday' => ['moon','Луна','Дружелюбие ко всем живым существам, желание и способность заботиться о других, 
											огромное чувство внутреннего счастья (не зависящее от внешних обстоятельств), 
											полное спокойствие, большая благодарность ко всему, уважение и любовь к матери, 
											контроль за своими эмоциями, серьезное отношение к деторождению и воспитанию,  очень сильная интуиция.'],
			'Tuesday' => ['mars', 'Марс', 'Бесстрашие, большая сила воли, практичность, решительность, неуклонное следование Высшей цели, 
											сильное логическое мышление, умение воплощать почти любые, даже революционные идеи, умение и желание защищать слабых.'],
			'Wednesday' => ['mercury', 'Меркурий','Непревзойденная логика, глубочайшие аналитические способности, 
													умение учиться на чужих ошибках и очень кратких наставлениях, умение быстро схватывать суть. 
													Способность объяснять сложные вещи быстро и простым языком, открытость к новым знаниям, 
													способность ставить цели и быстро их достигать, быстрая адаптация к людям и обстоятельствам, 
													тонкое чувство юмора, здравомыслие.'],
			'Thursday' => ['jupiter', 'Юпитер','Здоровый оптимизм, уважение и благожелательное отношение во всем живым существам, 
												сострадание, честность, почтительная речь, искренность, любовь делать пожертвования втайне, 
												непривязанность и независимость от денег. Регулярность и последовательность в духовной практике, 
												полный отказ от азартных игр. Отсутствие критики и осуждения других людей, как в уме, так и в словах.'],
			'Friday' => ['venus', 'Вернера','Безусловная любовь ко всем живым существам, доброжелательность, способность принимать себя 
												и других такими, какие они есть, великодушие, отсутствие привязанности к деньгам, материальным благам, 
												грациозность, умение создавать пространство любви и красоты вокруг себя, правильное использование драгоценных камней,
												музыки, ароматов, чувство прекрасного, всепрощение, отличное чувство юмора, мягкая харизма.'],
			'Saturday' => ['saturn', 'Субботу','Терпение, скромность, смирение, стремление жить в уединенном месте, отсутствие привязанностей 
												и зависимостей, понимание, что все временно, умение ценить каждую секунду. Видение во всем Высшей воли, 
												внутреннее принятие всего и всех, спокойствие. Верность, правдивость, надежность. 
												Понимание, что истинный труд в первую очередь – это работа над собой. Полный контроль над эмоциями, 
												отличные исполнительские и организаторские способности, огромное терпение и выносливость.'],
			'Sunday' => ['sun', 'Воскресенье','Большое чувство ответственности – за себя, свой род и за всех живых существ, 
												благородство, великодушие, щедрость, большое чувство собственного достоинства, 
												человечность, целеустремленность, решительность, сила воли, умение руководить,
												жизнерадостность, независимость от мнения окружающих, искренность, регулярный ранний подъем, 
												постоянный энтузиазм и благодарность ко всем и ко всему. У такого человека получается делать других счастливыми,
												и от этого ему очень хорошо.']
			];
			
$zodiacs = [
			1 => [20, 'aquarius', 'Водолей','Уран и Сатурн одарили этот воздушный знак зодиака развитой интуицией и эмоциональностью. Водолей раним, доброжелателен, из-за навязчивости и отсутствия такта бывает одинок. Он любознателен, интересуется всем вокруг, но редко углубляется в суть и применяет знания на практике. Водолеям очень тяжело сочетать романтический взгляд на мир и реализм. Это яркие и неординарные личности, эрудированны, часто занимаются благотворительностью, способны сохранять спокойствие и мыслить рассудительно в непростых ситуациях.'],
			2 => [19, 'pisces', 'Рыбы','Самый пассивный знак зодиака — это Рыбы. Влияние Нептуна связано с мистикой, подсознанием и интуицией. А стихия Вода делает Рыб мечтательными, проницательными и загадочными особами. Кроме того, они сентиментальны, неприхотливы и обладают хорошим чувством юмора. Окружающие считают Рыб слабыми и беспомощными, что им только на руку: Рыбы — прекрасные манипуляторы. Люди, рожденные под этим знаком, очень уравновешенны, легко скрывают чувства, умеют мыслить разносторонне и лишены меркантильности и тщеславия. Знаки зодиака — двенадцать сегментов небесной сферы, разбитой на равные 30-градусные отрезки. Имена им присваиваются в зависимости от того или иного созвездия, размещающегося в том же отрезке. Еще в Вавилоне астрологи заметили, что характеристика знаков зодиака и личностные качества каждого человека взаимосвязаны. А все, что происходит на Земле, обусловлено движением Солнца, Луны и других небесных тел.'],
			3 => [21, 'aries', 'Овен','Марс и Солнце покровительствуют Овну, а стихия его огонь. Овны — это настоящие безумцы, энергичны, склонны к подвигам, импульсивным поступкам и ярким образам. Они ненавидят скуку и обыденность, видят мир черно-белым, прямолинейны, упрямы, способны на саморазрушение. Окружающие любят их за простодушие, щедрость, ответственность и мужественность.'],
			4 => [20, 'taurus', 'Телец','Венера и Луна дарят этому знаку зодиака чувственность и сентиментальность, а его стихия Земля — устойчивость и фундаментальность. Телец молчалив и сам себе на уме, имеет холодный ум, развитую интуицию и силу воли. В спокойном состоянии люди Тельцы мягкие и терпеливые, но могут легко выйти из себя, если пытаться на них давить. Обиду хранят долго, не слушают советов, действуют напролом, они упрямые и властные натуры.'],
			5 => [21, 'gemini', 'Близнецы','Этим двояким знаком управляет планета Меркурий и стихия Воздух, одаряя его непостоянством, переменчивостью и дружелюбием. Близнецы умны, талантливы, развиваются и учатся всю жизнь и во всех направлениях, часто рассеянны, но способны быстро мобилизовать силы и совершить рывок. Не любят обременять себя чужими проблемами и лишней ответственностью. Люди могут заподозрить их в лицемерии, не подозревая, что сами Близнецы не способны сформулировать свою точку зрения, так она переменчива. Они могут одновременно испытывать противоречивые чувства, находить приключения и замечать перемену настроения в окружающих.'],
			6 => [21, 'cancer', 'Рак','Отличительной чертой людей, родившихся под знаком зодиака Рак, является чувственность. Их стихия — Вода, а покровительствует им Луна. Раки хитры, гибки, скрытны, склонны просчитывать ситуацию на несколько ходов вперед и больше всего боятся финансовой нестабильности. Эти люди — настоящие домоседы, щедры и внимательны к близким, они могут оказаться холодными и жестокими с незнакомцами. Злопамятны и мстительны, но слишком осторожны, чтобы идти на открытый конфликт. Окружающие любят Раков за их тонкую душевную организацию, умение заботиться и сопереживать.'],
			7 => [23, 'leo' , 'Лев','Это огненный знак зодиака: им управляет Солнце. Львы энергичные, независимые, самостоятельные и творческие личности. Люди, родившиеся под этим знаком, стремятся к первенству и успеху во всех начинаниях, им не нравятся второстепенные роли и ограничения. Они требовательны к себе, своей внешности, стараются произвести лучшее впечатление и всем понравиться. Тщеславны и эгоистичны, часто высокомерны. Они любят лесть и внимание. Но в то же время отличаются благородством, жертвенностью и отвагой.'],
			8 => [23, 'virgo', 'Дева','Дева — типичный представитель стихии Земли. Ей покровительствует интеллектуальный Меркурий. Девы надежные, трудолюбивые, умные и педантичные люди. Склонные к анализу и критике, они все должны контролировать и систематизировать. Любят порядок в доме, подсчет денег, стерильность, практичность. Люди знака Девы застенчивы, иногда слишком критичны к себе и окружающим, могут зацикливаться на работе, уборке, учебе, внешности. Это очень искренний, щедрый и сочувствующий знак зодиака, с обостренным чувством гуманности и ответственности.'],
			9 => [23, 'libra', 'Весы','Воздушный знак зодиака под покровительством Венеры — планеты устойчивости, равновесия и гармонии. Люди, рожденные под знаком Весов, рассудительны, мечтательны, элегантны, начитаны, стремятся к знаниям, любят одобрение и всячески его добиваются. Весы плохо воспринимают критику, избегают ответственности и боятся проявлять оригинальность. Их нередко бросает в крайности: они могут работать с утра до ночи, быть социально активными и неожиданно опустить руки и замкнуться в себе. Они любят находиться в комфорте, красивой обстановке, развлекаться и наслаждаться обществом противоположного пола.'],
			10 => [23, 'scorpio', 'Скорпион','Скорпион ведом Марсом, но пребывает под Плутоном, символизирующем изменчивость и противоречия. Именно противоречивыми являются Скорпионы. Они агрессивны и эротичны, неистовы и молчаливы, защищаются, но не атакуют, любят страстно, но не раскрываются. Эти люди живут на полную силу, азартны, категоричны, имеют много тайн, склонны драматизировать и не доверять окружающим. Скорпионы — прекрасные психологи, легко манипулируют людьми и пользуются их слабыми сторонами.'],
			11 => [22, 'sagittarius', 'Стрелец','Юпитер, планета философии, религии и путешествий, покровительствует огненному Стрельцу и наделяет его многочисленными талантами. Жизнерадостные и щедрые Стрельцы склонны идеализировать мир и стремиться изменить его к лучшему. Зачастую люди Стрельцы отличаются силой воли, решимостью и даже воинственностью, склонны к обобщению и нравоучениям. Самый оптимистичный и дружелюбный знак зодиака может выйти из себя, если кто-то посягает на их свободу и лицемерит.'],
			12 => [22, 'capricorn', 'Козерог','Козерог — знак Земли, и этим объясняется его рассудительность и практичность. А его дисциплинированность, потребность в признании и терпение — покровительством Сатурна. Использовать каждый шанс, подаренный судьбой, — это о Козероге. Он стремится к лидерству, учится на протяжении всей жизни, стойко и уверенно достигает цели. Тяжело решается на риск, предпочитая довольствоваться малым, часто пессимистичен, не уверен в себе. Не умеет расслабляться и корит себя за бездеятельность и лень.']
			];


$animals = [
			1941 => ['snake', 'Змея', 'Гибкость','В китайской культуре Змея – самое загадочное животное китайского зодиака. 
													У людей, родившихся в год Змеи, лучше других развита интуиция. 
													Змеи склонны прислушиваться к собственному мнению, они решительно двигаются к своим целям и ненавидят неудачи. 
													Змеи расчётливы и стремятся к личной выгоде. 
													Любят окружить себя всем самым лучшим, хотя у них редко хватает терпения на длительный шоппинг. 
													Змеи представляют собой символ мудрости. Они умны и приятны в общении, но говорят мало. 
													Родившихся в год Змеи обычно воспринимают как великих мыслителей.
													Люди знака Змеи предпочитают работать в одиночку, поэтому они легко подвержены стрессу. 
													Если напряжение становится более очевидным, то лучше предоставить им личное пространство и время, чтобы прийти в себя.'],
			1942 => ['horse', 'Лошадь', 'Стремление вперёд','Люди, родившиеся в год Лошади, невероятно увлечённые, активные и энергичные. 
																Лошади любят находиться в толпе, их часто можно увидеть на концертах, 
																в театре, на выставках, спортивных мероприятиях и вечеринках.
																У рождённых в год Лошади прекрасное чувство юмора, у них всегда найдётся остроумный ответ.
																Лошади любят быть в центре внимания и умеют быстро расположить к себе.
																Иногда Лошади бывают немного эгоистичны, но это не значит, что их не волнуют проблемы других. 
																Родившиеся в год Лошади скорее хитрые, чем умные, и, 
																вероятно, поэтому большинству из них не хватает уверенности в себе.'],
			1943 => ['goat', 'Коза', 'Единение','Люди, рождённые в год Козы, как правило, скромные, деликатные, застенчивые, стабильные, 
													отзывчивые, дружелюбные; им присущи чувство справедливости и доброта.
													У Козы богатое воображение, она настойчива и легко обучается новым профессиональным навыкам. 
													Хотя родившиеся в год Козы производят впечатление мягких и податливых, они всегда придерживаются своего мнения.
													Козы любят находиться в обществе, но не стремятся быть в центре внимания. 
													Сдержанные и тихие, они всё время в своих мыслях. Козы любят одеваться модно, хорошо выглядеть для них очень важно.
													И хотя Козам по душе изысканные вещи, их нельзя назвать снобами.'],
			1944 => ['monkey', 'Обезьяна', 'Переменчивость','Люди, рождённые в год Обезьяны, притягательны, сообразительны и остроумны. 
																А природная тяга к шалостям, любопытство и находчивость добавляют их характеру озорства.
																Обезьяны любят розыгрыши и подшутить над другими. Им нравится дурачиться, и, хотя они не имеют дурных намерений, 
																их шутки иногда ранят чувства окружающих их людей.
																Обезьяны быстро учатся и умеют находить выгоду при любых обстоятельствах. У них много интересов и им нужен 
																такой спутник/ спутница, которые смогут их мотивировать и вдохновлять. В то время как некоторым нравится 
																эксцентричная натура Обезьяны, другие с насторожённостью относятся к их беспокойному, хитрому и любознательному характеру.
																Хотя они умны и изобретательны, Обезьяны не всегда умеют правильно преподнести свои таланты. 
																Им нравятся непростые задачи, и обычно Обезьяны предпочитают жить в больших городах.'],
			1945 => ['rooster', 'Петух', 'Постоянство','Петухи очень наблюдательны. Они трудолюбивые, находчивые, смелые и талантливые, Петухи очень уверены в себе.
														Родившиеся в год Петуха, несомненно, душа компании. Они активные, забавные, популярные в своём окружении. 
														Петух – разговорчивый, общительный, открытый, честный и верный своим родным и друзьям. 
														Им нравится быть в центре внимания, они привлекательны и отлично выглядят.
														Петухи очень любят находиться в обществе: и на вечеринке с друзьями, и на рабочей встрече или собрании. 
														Они наслаждаются вниманием толпы, показывая свои привлекательность и очарование при любом удобном случае.
														Петухи ожидают, что когда они что-то рассказывают, окружающие будут их внимательно слушать, и 
														Петух может выйти из себя, если этого не происходит. Тщеславные и хвастливые, 
														Петухи постоянно нахваливают себя и свои достижения.
														Их стремление и желание постоянно находиться в центре внимания может иногда раздражать окружающих.'], 
			1946 => ['dog', 'Собака', 'Верность','Люди, родившиеся в год Собаки, - верные и честные, внимательные и добрые, 
													благоразумные и осмотрительные. 
													Они преданны и сделают всё для своих близких.
													Из-за того, что Собаке сложно правильно выражать свои чувства и мысли, 
													она может производить впечатление упрямой личности. Но это лишь оттого, 
													что рождённые под этим знаком стараются сделать мир хоть чуточку лучше.
													Собака благородна и великодушна. Люди, родившиеся в год Собаки, 
													не склонны к преступлениям или корысти. Они ищут размеренную жизнь 
													и крепкую семью, чтобы забыть о несправедливостях и тревогах этого мира.
													Если в них сомневаются, Собаки впадают в пессимизм и думают, что мир сложен и жесток. 
													Они живут в ожидании плохого, не умея радоваться хорошему.
													Люди, рождённые в год Собаки, всегда готовы прийти на помощь, не заботясь о собственных интересах. 
													Если оказываются обманутыми теми, кто хитрее их, то очень страдают, но никогда не будут мстить.'],
			1947 => ['pig', 'Свинья', 'Приветливость','Рождённые в год Свиньи отличаются усердием, состраданием и щедростью. 
														Когда они ставят перед собой цель, то умеют сосредоточиться и 
														направить всю свою энергию на её достижение. 
														И хотя Свинья редко обращается за помощью, тем не менее,
														родившиеся под этим знаком не откажутся помочь другим. 
														Они никогда не подозревают обмана, поэтому их легко обмануть.
														В трудных ситуациях Свинья остаётся спокойна и не впадает в панику. 
														Все зависимости от того, насколько серьёзны проблемы, 
														родившиеся под знаком Свиньи подойдут к их решению взвешенно, 
														со всей осторожностью. Сильно развитое чувство ответственности помогает Свинье доводить начатое дело до конца.'],
			1948 => ['rat', 'Крыса', 'Мудрость','Крысы сообразительны, находчивы и разносторонни.
													Крысы обладают сильно развитой интуицией и быстрой реакцией, они легко приспосабливаются к новой среде. 
													Богатое воображение и наблюдательность позволяют рождённым в год Крысы выгодно пользоваться возникающими возможностями.
													Крысы очень любопытны и рады попробовать свои силы в чём угодно, справляясь с этим очень умело.
													Из-за недостатка храбрости, а также умения управлять другими, 
													Крысы не становятся хорошими лидерами. Они придирчивы и преследуют свои цели, но не обладают широкими взглядами.
													Крысы добрые, но иногда бывают невежливы с другими. 
													Люди, родившиеся под знаком Крысы, обычно спят допоздна, ведь грызуны ведут ночной образ жизни.'],
			1949 => ['ox', 'Бык', 'Трудолюбие','Быки известны своим усердием, надёжностью, силой и решимостью. 
												Честные по своей природе, Быки – большие патриоты своей страны, они амбициозны и верят в идеалы. 
												Рождённым в год Быка важны традиции, семья и работа. Как видно из этих качеств, Быки – консерваторы. 
												Желание двигаться вперёд и большое терпение помогают Быку шаг за шагом добиваться своих целей. 
												Они не зависят от мнения других людей или окружающей обстановки, действуя в соответствии со своими идеалами и возможностями. 
												Прежде чем решиться на что-то, они подготовят чёткий план, описав детально каждый шаг, вложив сильную веру и физическую силу. 
												Именно поэтому родившиеся в год Быка добиваются больших успехов.
												К минусам характера Быка можно отнести плохие коммуникативные навыки. 
												У них не получается лёгкого общения с окружающими, они даже часто думаю, 
												что и не стоит обмениваться идеями с другими людьми.
												Быки упрямы и придерживаются своего собственного пути.'], 
			1950 => ['tiger', 'Тигр', 'Храбрость','Рождённые в год Тигра – смелые, непредсказуемые, уверенные в себе. 
													Они очень обаятельны и умеют расположить к себе. 
													Но иногда они могут быть импульсивными, раздражительными и избалованными.
													Тигры упрямы, решительны и своевольны. 
													Они влиятельны, любят соревноваться и всегда держат свое слово.
													Родившиеся в год Тигра ответственные и отличаются силой духа, 
													а потому среди них встречаются прекрасные лидеры. 
													Они не склонны к долгим приготовлениям, но легко справляются со всем, что встретится на пути.'],
			1951 => ['rabbit', 'Кролик', 'Осторожность','Кролики по характеру спокойные, тихие и чуткие, а также проворные, умелые, добрые, 
															терпеливые и очень ответственные. Однако они могут быть легкомысленны и упрямы, ранимы и чересчур скрытны. 
															В общем и целом, Кролики отличаются приятным характером и умеют расположить к себе.
															Кролики преданны близким им людям, но не спешат делиться с окружающими своими мыслями 
															и склонны витать в облаках. Рождённые в год Кролика слишком осторожны и консервативны, 
															а потому иногда упускают хорошие возможности.'],
			1952 => ['dragon', 'Дракон', 'Сила','Дракон – единственное мифическое животное в китайском зодиаке. 
													Это самый сильный и мощный знак, но он также славится своей горячностью и острым языком. 
													В древние времена считалось, что благодаря властности и амбициозности, Драконы способны держать под контролем весь мир.
													Такие врожденные качества, как мужество, упорство и высокий интеллект, позволяют Драконам быть на высоте и уверенными в своих силах. 
													Они не боятся трудностей и готовы рискнуть.
													Однако вместе с тем Драконы раздражительны, несдержанны и редко бывают открыты для критики. 
													Они не любят следовать традициям, предпочитая жить по своим правилам.']
			];
			
	
	$d = 11;
	$m = 2;
	$y = 1990;
	
	
	
	$animal = $animals[1941 + ($y - 1941) % 12][1];
	$animalImg = './images/animals/'.$animals[1941 + ($y - 1941) % 12][0].'.png';
	$animalPwr = $animals[1941 + ($y - 1941) % 12][2];
	$animalDsc = $animals[1941 + ($y - 1941) % 12][3];
	
	$zodiacArr = $d > $zodiacs[$m][0] ? $zodiacs[$m] : ($m == 12 ? $zodiacs[1] : $zodiacs[$m - 1]);
	$zodiac = $zodiacArr[2];
	$zodiacImg = './images/zodiacs/'.$zodiacArr[1].'.png';
	$zodiacDsc = $zodiacArr[3];

	$planet = $planets[date("l", strtotime($y."-".$m."-".$d))][1];
	$planetImg =  './images/planets/'.$planets[date("l", strtotime($y."-".$m."-".$d))][0].'.png';
	$planetDsc = $planets[date("l", strtotime($y."-".$m."-".$d))][2];
	//strtotime(date('Y-m-d'));
	
	echo json_encode(array('animal' => $animal,
							'animalImg' => $animalImg,
							'animalPwr' => $animalPwr,
							'animalDsc' => $animalDsc,
							'zodiac' => $zodiac,
							'zodiacImg' => $zodiacImg,
							'zodiacDsc' => $zodiacDsc,
							'planet' => $planet,
							'planetImg' => $planetImg,
							'planetDsc' => $planetDsc
							
	));
	

?>