
import flower1 from '../images/тюльпан.jpg';
import flower1_gif from '../images/flowers-animated/flower1.gif';
import flower2 from '../images/ромашка.jpg';
import flower2_gif from '../images/flowers-animated/flower2.gif';
import flower3 from '../images/гиацинт.jpg';
import flower3_gif from '../images/flowers-animated/flower3.gif';
import flower4 from '../images/пион.jpg';
import flower4_gif from '../images/flowers-animated/flower4.gif';
import flower5 from '../images/гладиолус.jpg';
import flower5_gif from '../images/flowers-animated/flower5.gif';
import flower6 from '../images/роза.jpg';
import flower6_gif from '../images/flowers-animated/flower6.gif';

import insta_logo from '../images/instagram.svg';
import vk_logo from '../images/vk.svg';
import telegram_logo from '../images/telegram.svg';
import '../style/history.css';

import { useHover } from './useHover';




const History = () => {

        // кастомный хук useHover
        const [hoverRef1, isHovered1] = useHover()
        const [hoverRef2, isHovered2] = useHover()
        const [hoverRef3, isHovered3] = useHover()
        const [hoverRef4, isHovered4] = useHover()
        const [hoverRef5, isHovered5] = useHover()
        const [hoverRef6, isHovered6] = useHover()

    
    return (
        <div className="html-container2">
            <header className="historyHeader">
                <h2>История цветов</h2>
            </header>

        <div className="flower">
            <h2>Тюльпан</h2>
            <p>
                <img ref={hoverRef1} src={isHovered1 ? flower1_gif : flower1} className="img_left" alt=""/> Давным-давно человеческое счастье пряталось в плотно сжатых бутонах тюльпана.
                И никто ни силой, ни хитростью не мог добраться до него. Однажды по лугу шла нищенка со златокудрым ребенком.
                Она и не помышляла добраться до сердца тюльпана и взять оттуда свое счастье. Но малыш вырвался из ее рук и, смеясь, бросился к дивному цветку. 
                Тюльпан, видя чистоту чувств ребенка, раскрыл лепестки. Теперь ранней весной эти нежные цветы с готовностью раскрывают нам свои сердца и дарят счастье всякому, кто его жаждет. 
            </p>
        </div>
        <div className="flower">
            <h2>Ромашка</h2>
            <p>
                <img ref={hoverRef2} src={isHovered2 ? flower2_gif : flower2} className="img_right" alt=""/> На свете жила девушка, и был у нее любимый - Роман, который делал для нее подарки своими руками, превращал каждый день жизни девушки в праздник!
                Однажды Роман лег спать - и приснился ему простой цветок - желтая сердцевинка и белые лучики, расходившиеся в стороны от сердцевины. Когда он проснулся, то увидел цветок рядом с собой и подарил его своей девушке.
                А девушка захотела, чтобы такой цветок был у всех людей. Тогда Роман отправился на поиски этого цветочка и нашел его в стране Вечных снов, но царь этой страны не отдал цветок просто так. 
                Правитель сказал Роману, что люди получат целое ромашковое поле, если молодой человек останется в его стране.
                Ждала девушка своего любимого очень долго, но в одно утро она проснулась и увидела за окном огромное бело-желтое поле. 
                Тогда девушка поняла, что ее Роман больше не вернется и назвала цветок в честь своего любимого - Ромашкой! Теперь девушки гадают на ромашке - "Любит не любит!"
            </p>
        </div>
        <div className="flower">
            <h2>Гиацинт</h2>
            <p>
                <img  ref={hoverRef3} src={isHovered3 ? flower3_gif : flower3} className="img_left" alt=""/>Красивая легенда связана с названием этого цветка.
                Оно происходит от имени героя греческой мифологии - прекрасного юноши по имени Хиакинтос, в которого был влюблен бог солнца Аполлон. 
                Однажды во время тренировки по метанию диска охваченный ревностью бог Западного Ветра, который тоже был влюблен в Хиакинтоса, смертельно ранил юношу. 
                На месте пролитой крови Хиакинтоса вырос очаровательный цветок, который Аполлон назвал Гиацинтом (лат. Hyacinthus) в честь своего погибшего любимого.
            </p>
        </div>
        <div className="flower"> 
            <h2>Пион</h2>
            <p>
                <img  ref={hoverRef4} src={isHovered4 ? flower4_gif : flower4} className="img_right" alt=""/>Согласно историческим источникам пион получил своё название в честь Пеонии – местности, откуда произошёл один из его видов.
                Однако существуют и другие версии. Согласно одной из них, название этого растения связано с именем персонажа древнегреческой мифологии – Пионом, который был талантливым учеником врача Эскулапа. 
                Однажды Пион вылечил владыку загробного мира Плутона, раненного Геркулесом. Чудесное исцеление повелителя подземного царства возбудило в Эскулапе зависть, и он решил убить своего ученика.
                Однако Плутон, узнавший о злых намерениях Эскулапа, в благодарность за оказанную ему помощь, не дал Пиону умереть.
                Он превратил искусного врача в красивый лекарственный цветок, названный в честь него пионом.
                В Древней Греции этот цветок считался символом долголетия и целительства.
                Одарённых греческих врачей называли "пиониями", а лекарственные растения травами "пионий".
                Другая античная легенда рассказывает, как однажды богиня Флора собралась в путешествие на Сатурн.
                На время своего длительного отсутствия она решила найти помощника. Богиня объявила о своём намерении растениям. Через несколько дней подданные Флоры собрались на лесной опушке, чтобы выбрать своего временного покровителя. 
                Все деревья, кустарники, травы и мхи отдали свой голос в пользу очаровательной розы. Лишь один пион кричал, что он лучше всех. Тогда Флора подошла к дерзкому и глупому цветку и сказала: В наказание за твою гордыню ни одна пчела не сядет на твой цветок, ни одна девушка не приколет его себе на грудь. Поэтому у древних римлян пион олицетворял напыщенность и чванство.
            </p>
        </div>
        <div className="flower">
            <h2>Гладиолус</h2>
            <p>
                <img  ref={hoverRef5} src={isHovered5 ? flower5_gif : flower5} className="img_left" alt=""/> У римлян гладиолус считался цветком гладиаторов. По легенде, жестокий римский полководец захватил в плен фракийских воинов и приказал превратить их в гладиаторов, а самым красивым, отважным, ловким и верным друзьям Севту и Тересу полководец повелел первыми сразиться друг с другом, пообещав, что победитель получит руку его дочери и будет отпущен на свободу.
                Поглядеть на это зрелище сошлось множество любопытных горожан. Однако они не увидели желаемого: когда затрубили ратные трубы, призывая отважных воинов к битве, Севт и Терес воткнули мечи в землю и бросились друг к другу с распростертыми объятиями. Толпа возмущенно загудела.
                Трубы прозвучали вновь, требуя поединка, и когда воины вновь не удовлетворили ожидания кровожадных римлян, их предали смерти. Но как только тела поверженных коснулись земли, из рукоятей их мечей выросли цветущие гладиолусы, которые и по сей день считаются символом дружбы, верности, памяти и благородства.
            </p>
        </div>
        <div className="flower">
            <h2>Роза</h2>
            <p>
                <img  ref={hoverRef6} src={isHovered6 ? flower6_gif : flower6} className="img_right rose" alt=""/> У древних греков цветок с шипами символизировал страсть и любовь, а также был олицетворением богини любви – Афродиты. Согласно легенде, роза расцвела в тот миг, когда из пены морской на свет появилась Афродита. Как только богиня вышла на берег, пена на ее теле стала превращаться в бутоны ярко-красных роз.
            </p>
        </div>
        <footer>
            <h2>Где мы есть?</h2>
            <p>По любым вопросам, можете связаться с нами через:</p>
            <div className="social-media">
                <a href="https://instagram.com/violetta_merkul?igshid=YmMyMTA2M2Y="><img src={insta_logo} alt=""/>
                <span>Инстаграм</span></a>
                <a href="https://vk.com/viomerkul"><img src={vk_logo} alt=""/>
                <span>ВКонтакте</span></a>
                <a href=""><img className="telegram-icon" src={telegram_logo} alt=""/>
                <span>@viomer</span></a>
            </div>
        </footer>
        </div>
    )
}
export {History}