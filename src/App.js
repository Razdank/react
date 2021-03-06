import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, NavLink, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <header align="center">
          <a name="top"></a>
          <h1>Домашние животные</h1>
          <div class="men0" id="l1">
            <NavLink className="men1" exact="true" activeClassName="men2" to="/">Котики</NavLink>
          </div>
          <div class="men0" id="l2">
            <NavLink className="men1" activeClassName="men2" to="/dogs">Собачки</NavLink>
          </div>
          <div class="men0" id="l3">
            <NavLink className="men1" activeClassName="men2" to="/hamsters">Хомячки</NavLink>
          </div>
        </header>
        <Switch>
          <Route path="/dogs">
            <Dogs />
          </Route>
          <Route path="/hamsters">
            <Hamsters />
          </Route>
          <Route path="/">
            <Cats />
          </Route>
        </Switch>
        <footer>
          <a href="#top">
            Наверх <img class="arrow" src="arrow.png"></img>
          </a>
          . Создателем сайта является студент группы ПМИ-РКС-20 Семенов Дмитрий
        </footer>
      </div>
    </Router>
  );
}
function Cats() {
  return (
    <div class="main">
      <h2 align="center">Котик</h2>
      <div align="center" class="imgs>">
        <img src="cat.jpg" alt="Котик" title="Котик"></img>
      </div>
      <p>
        Кошка, или дома́шняя ко́шка (лат. Félis silvéstris cátus), — домашнее
        животное, одно из наиболее популярных (наряду с собакой)
        «животных-компаньонов».
      </p>
      <p>
        С точки зрения научной систематики, домашняя кошка — млекопитающее
        семейства кошачьих отряда хищных. Ранее домашнюю кошку нередко
        рассматривали как отдельный биологический вид. С точки зрения
        современной биологической систематики домашняя кошка (Felis silvestris
        catus) является подвидом лесной кошки (Felis silvestris).
      </p>
      <p>
        Являясь одиночным охотником на грызунов и других мелких животных, кошка
        — социальное животное, использующее для общения широкий диапазон
        звуковых сигналов, а также феромоны и движения тела.
      </p>
      <p>
        В настоящее время в мире насчитывается около 600 млн домашних кошек,
        выведено около 200 пород, от длинношёрстных (персидская кошка) до
        лишённых шерсти (сфинксы), признанных и зарегистрированных различными
        фелинологическими организациями.
      </p>
      <p>
        На протяжении 10 000 лет кошки ценятся человеком, в том числе за
        способность охотиться на грызунов и других домашних вредителей.
      </p>
      <h3 align="center">Научная классификация</h3>
      <p>
        В 1758 году Карлом Линнеем в «Системе природы» домашней кошке было
        присвоено биномиальное название Felis catus. Иоганн Христиан фон Шребер
        в 1775 году дал дикой кошке название Felis silvestris.
      </p>
      <p>
        На основании данных, полученных современной филогенетикой, домашняя
        кошка является одним из пяти подвидов дикой кошки Felis silvestris, и её
        правильное международное научное название — Felis silvestris catus.
        Решение о закреплении за дикой кошкой названия F. silvestris, а за её
        одомашненным подвидом — названия F. silvestris catus, было принято в
        2003 году Международной комиссией по зоологической номенклатуре, при
        этом было оговорено, что если в какой-либо классификации домашняя кошка
        будет описываться как отдельный вид, то в этом случае для названия
        соответствующего таксона следует использовать комбинацию, предложенную
        Линнеем, — F. catus.
      </p>
      <p>
        В литературе встречаются и другие названия, используемые в качестве
        международного научного (латиноязычного) названия домашней кошки: Felis
        catus domesticus, Felis silvestris domesticus, а также предложенное в
        1777 году Иоганном Христианом Поликарпом Эркслебеном в «Началах
        естествознания» название Felis domesticus (изначально — Felis domestica,
        поскольку слово Felis в те времена считалось женского рода). Все эти
        названия входят в синонимику таксона, а потому не должны использоваться.
      </p>
      <p>
        В качестве русского названия данного таксона в научной
        (научно-популярной) литературе используется как выражение «домашняя
        кошка» (или «кошка домашняя»), так и просто слово «кошка».
      </p>
      <h3 align="center">Происхождение и история одомашнивания</h3>
      <p>
        Согласно генетическому исследованию аутосомных маркеров и
        митохондриальной ДНК 979 домашних, диких и одичавших кошек с трёх
        континентов, в том числе барханных кошек (Felis margarita), все домашние
        кошки по материнской линии происходят как минимум от пяти
        представительниц подвида степная кошка (Felis silvestris lybica),
        имеющих разные гаплотипы митохондриальной ДНК. В митохондриальной
        гаплогруппе IV, специфической для ближневосточных и домашних кошек,
        идентифицировали 6 субклад и рассчитали время жизни общего предка — ок.
        13 тыс. лет назад, что значительно превышает время предполагаемого
        одомашнивания ближневосточных кошек[31][32]. Генетический анализ
        митохондриальной ДНК 209 кошек из 30 захоронений на территории Европы,
        Ближнего Востока и Северной Африки показал, что домашние кошки
        распространялись по миру двумя большими волнами. Первая волна имела
        место на заре сельского хозяйства 12—9 тыс. лет назад — в Плодородном
        полумесяце и его окрестностях домашние кошки расселились вместе с
        земледельцами по всему Ближнему Востоку. Несколько тысяч лет спустя
        вторая волна, вышедшая из Египта, охватила практически всю Европу и
        Северную Африку.
      </p>
      <p>
        Обособление подвида Felis silvestris lybica произошло около 130 тысяч
        лет назад. Степная кошка до сих пор распространена по всей Северной
        Африке и в обширной зоне от Средиземноморья до Китая, где она обитает в
        зарослях саксаула в пустынях, в кустарниках возле водоёмов, в предгорьях
        и горах. Хотя мелкие дикие кошки разных подвидов могут скрещиваться
        между собой и давать потомство, результаты генетических исследований
        показали, что в филогенезе домашней кошки другие подвиды Felis
        silvestris, кроме степной кошки, участия не принимали.
      </p>
      <p>
        Одомашнивание кошки произошло примерно 9500 лет назад на Ближнем Востоке
        в районе Плодородного полумесяца, где зародились и развивались
        древнейшие человеческие цивилизации. Одомашнивание кошки началось при
        переходе человека к оседлому образу жизни, с началом развития
        земледелия, когда появились излишки пищи и возникла необходимость их
        сохранения и защиты от грызунов.
      </p>
      <p>
        Древнейшее археологическое свидетельство одомашнивания кошки было
        обнаружено на Кипре, где в ходе археологических раскопок было найдено
        совместное захоронение человека и кошки, которое датируется 7500 годом
        до н. э. Также было установлено, что остров Кипр был колонизирован
        выходцами из районов современных Анатолии (Турция) и Сирии.
      </p>
      <p>
        Ранее учёные полагали, что первыми одомашнили кошек древние египтяне.
        Однако самые ранние свидетельства приручения кошек древними египтянами
        относились к 2000—1900 годам до нашей эры. А недавно было установлено,
        что в Древний Египет домашняя кошка попала, как и на Кипр, из
        Плодородного полумесяца (Анатолии). В настоящее время кошка является
        одним из самых популярных домашних животных.
      </p>
      <p>
        Несмотря на то, что кошки были одомашнены достаточно давно, большинство
        кошек способны выживать в условиях нахождения вне человеческого жилья,
        пополняя ряды вторично одичавших кошек, так как в условиях бродячей
        жизни кошки обычно быстро повторно дичают. Вторично одичавшие кошки
        часто живут уединённо и охотятся в одиночку, но иногда образуют
        небольшие колонии из нескольких самок с котятами.
      </p>
    </div>
  );
}
function Dogs() {
  return (
    <div class="main">
      <h2 align="center">Собачка</h2>
      <div align="center" class="imgs>">
        <img src="dog.jpg" alt="Собачка" title="Собачка"></img>
      </div>
      <p>
        Собака (лат. Canis lupus familiaris) — домашнее животное, одно из
        наиболее популярных (наряду с кошкой) животных-компаньонов.
      </p>
      <p>
        Первоначально домашняя собака была выделена в отдельный биологический
        вид (лат. Canis familiaris) Линнеем в 1758 году, в 1993 году
        реклассифицирована Смитсоновским институтом и Американской ассоциацией
        териологов в подвид волка (Canis lupus). В русскоязычных письменных
        источниках слово «собака» в значении соответствующего животного
        встречается по крайней мере с 1475 года (начиная с грамоты князя Андрея
        Васильевича Меньшого Кириллову монастырю).
      </p>
      <p>
        С зоологической точки зрения, собака — плацентарное млекопитающее отряда
        хищных семейства псовых.
      </p>
      <p>
        Собаки известны своими способностями к обучению, любовью к игре,
        социальным поведением. Выведены специальные породы собак,
        предназначенные для различных целей: охоты, охраны, тяги гужевого
        транспорта и другого, а также декоративные породы (например, болонка,
        пудель).
      </p>
      <h3 align="center">Происхождение и история одомашнивания</h3>
      <p>
        Имеется несколько гипотез происхождения собаки, наиболее вероятными её
        предками считаются волк и некоторые виды шакалов.
      </p>
      <p>
        В суждениях учёных о предках домашней собаки присутствуют две точки
        зрения. Одни считают, что собаки — полифилетическая группа (происходящая
        от нескольких предков), другие придерживаются мнения, что все собаки
        произошли от одного предка (монофилетическая теория).
      </p>
      <p>
        Этолог Конрад Лоренц, лауреат Нобелевской премии, выдвинул в своё время
        теорию о происхождении собак от волков и от шакалов, подчёркивая
        диаметральные различия между их характерами и повадками.
      </p>
      <p>
        На происхождение собаки от волка указывают комплексные результаты
        сравнительного анализа хромосом, поведения, морфологии, вокализации и
        результаты молекулярно-генетического анализа.
      </p>
      <h4 align="center">Ранний период одомашнивания</h4>
      <p>
        Собака является древнейшим из всех домашних животных. Учёные сходятся на
        том, что собака была одомашнена в Старом Свете в эпоху верхнего
        палеолита; однако по поводу точного места, временно́го отрезка и причин
        одомашнивания собаки в научной среде до сих пор единого мнения нет.
        Наскальные изображения, рисунки и находки археологов позволяют учёным
        делать некоторые выводы и предположения. В Волго-Окском междуречье
        собака представлена на всём протяжении мезолита и, по мнению археологов,
        являлась единственным домашним животным. Мезолитические собаки
        отличались крупными размерами и мощными челюстями. Судя по следам
        разделки на костях, местное население употребляло собак в пищу.
        Использовались шкуры и кости (для изготовления игольников). Основная
        роль собаки этого периода — помощник на охоте.
      </p>
      <h4 align="center">Сценарии одомашнивания</h4>
      <p>
        Существуют разные сценарии начала одомашнивания волка. В одном из них
        инициатива одомашнивания волка принадлежала человеку, в другом — волк
        сам начал осваивать новую экологическую нишу вблизи стоянок первобытного
        человека, то есть происходило его «самоодомашнивание». Вероятно, её
        пионерами могли быть очень редкие, уникальные по поведению особи,
        наиболее толерантные к человеку. Первая группа таких животных могла быть
        сильно инбридирована и подвержена процессам генетического дрейфа.
        Размноженная в числе эта начальная популяция и могла, как предполагают
        некоторые учёные, дать миру всё разнообразие собак. Это предположение
        было выдвинуто на основании исследований мтДНК, которые выявили
        небольшое число митохондриальных родословных, что могло указывать на
        ограниченное число основателей одомашнивающих событий.
      </p>
      <p>
        Но в то же время не было найдено корреляции между мт-гаплотипами и
        принадлежностью собак к породе. Это может служить свидетельством того,
        что породная дифференциация начиналась и происходила в генетически
        разнообразных популяциях примитивных пород, которые были широко
        распространены по всему миру. Исследования на уровне ядерной ДНК выявили
        большое генетическое разнообразие собак. Эти данные также предполагают,
        что генетический пул современных собак произошёл от разнообразного
        генного пула, что, в свою очередь, может указывать на многократные
        независимые события одомашнивания волка в разных местах и в разное
        время. Несмотря на то, что современные данные предполагают возникновение
        собак в Юго-Восточной Азии около 12—15 тыс. лет назад, в Западной России
        в это же время уже были дивергировавшие от волка собаки.
      </p>
      <p>
        Пока точно нельзя сказать, то ли одомашнивание человеком волка вызвало
        расхождение собаки с её предком, то ли это расхождение стало результатом
        эволюционного пути собаки, предшествующего одомашниванию человеком. У
        второй точки зрения есть свои сторонники. Ими были биологи Раймонд и
        Лорна Коппингеры. Иными словами, согласно этой теории, человек не
        одомашнивал волка по собственной инициативе; первый шаг был сделан
        волками, по каким-либо причинам отвергнутыми основной стаей и
        перебравшимися ближе к человеческому жилью, где можно было прокормиться
        отбросами. Этим особям было необходимо не только не нападать на
        человека, но и завоёвывать его доверие и симпатию. То есть собака как бы
        «приручила сама себя».
      </p>
      <p>
        Митье Жермонпре предполагает, что наши предки-охотники могли приручить
        щенков убитой волчицы. Канадский биолог Сьюзан Крокфорд (англ. Susan
        Crockford)) из университета Виктории полагает, что одомашнивание
        произошло самостоятельно.
      </p>
      <p>
        Существуют находки окаменелых костей волка 100 тысяч лет до н. э.,
        которые обнаружены в местах хозяйственной деятельности человека.
      </p>
    </div>
  );
}
function Hamsters() {
  return (
    <div class="main">
      <h2 align="center">Хомячок</h2>
      <div align="center" class="imgs>">
        <img src="hamster.jpg" alt="Хомячок" title="Хомячок"></img>
      </div>
      <p>
        Хомяки (лат. Cricetinae) — подсемейство грызунов семейства хомяковых.
        Включает 19 видов, относящихся к семи родам. Стали популярными домашними
        питомцами. Самым известным видом хомяка является золотой или сирийский
        хомячок (Mesocricetus auratus), который чаще всего используется в
        качестве домашних животных. Другими видами хомяков, которых обычно
        держат в качестве домашних животных, являются три вида хомячков, хомячок
        Кэмпбелла (Phodopus campbelli), джунгарский хомячок (Phodopus sungorus)
        и хомячок Роборовского (Phodopus roborovskii).
      </p>
      <p>
        Хомяки являются более сумеречными, чем ночными животными и, в дикой
        природе, остаются под землей в течение дня, чтобы не быть пойманными
        хищниками. Они питаются, главным образом, семенами, фруктами и
        растительностью, и иногда питаются роющими насекомыми. Физически они
        имеют крепкое тело с отличительными чертами, которые включают удлиненные
        щечные мешочки, простирающиеся до их плеч, которые они используют для
        переноса пищи в свои норы, а также короткий хвост и покрытые мехом ноги.
      </p>
      <h3 align="center">Общий облик</h3>
      <p>
        К семейству хомяков относятся небольшие, плотно сложенные грызуны с
        короткими конечностями, маленькими ушами и короткими хвостами. Длина
        тела варьируется от 5 до 34 см, хвоста от 0,7 до 10 см. Самки у
        некоторых видов крупнее самцов. Окраска густого меха на спине от
        пепельно- или буровато-серой до тёмной коричнево-охристой; на животе —
        чёрная, белая или серая. Иногда вдоль спины проходит чёрная полоса.
        Имеются очень развитые защёчные мешки.
      </p>
      <p>Хомяки имеют плохое зрение; они близоруки и дальтоники.</p>
      <h3 align="center">Природоохранный статус</h3>
      <p>
        Некоторые виды наносят серьёзный вред сельскому хозяйству, поедая
        бобовые и зерновые культуры. Являются естественным резервуаром
        возбудителей ряда инфекционных заболеваний. Шкурки некоторых видов
        заготавливаются. Хомяки используются как лабораторные животные и
        содержатся в неволе как домашние животные.
      </p>
      <p>
        В список Международной Красной книги занесены сирийский хомячок
        (Mesocricetus auratus) и хомячок Ньютона (Mesocricetus newtoni).
      </p>
      <p>
        В России водятся 12 видов хомяков, относящихся к 6 родам: крысовидные
        хомячки (Tscherskia), серые хомячки (Cricetulus), мохноногие хомячки
        (Phodopus), средние хомяки (Mesocricetus), настоящие хомяки (Cricetus),
        эверсманновы хомячки (Allocricetulus).
      </p>
    </div>
  );
}
