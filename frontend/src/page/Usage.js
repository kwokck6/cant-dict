import Accordion from "../components/Accordion";

function Usage(props) {
    return (
        <div>
            <div className="navbar">
                <nav className="nav nav-tabs" id="usage-tab">
                    <a className="nav-link active" id="principles-tab" data-bs-toggle="tab" href="#principles"
                       role="tab"
                       aria-controls="principles" aria-selected="true">編輯原則</a>
                    <a className="nav-link" id="entry-cat-tab" data-bs-toggle="tab" href="#entry-cat" role="tab"
                       aria-controls="entry-cat" aria-selected="false">辭彙體系</a>
                    <a className="nav-link" id="arrangement-tab" data-bs-toggle="tab" href="#arrangement" role="tab"
                       aria-controls="arrangement" aria-selected="false">排列原則</a>
                    <a className="nav-link" id="details-tab" data-bs-toggle="tab" href="#details" role="tab"
                       aria-controls="details" aria-selected="false">凡例要點</a>
                    <a className="nav-link" id="disclaimer-tab" data-bs-toggle="tab" href="#disclaimer" role="tab"
                       aria-controls="disclaimer" aria-selected="false">免責聲明</a>
                </nav>
            </div>

            <div className="tab-content">
                <div className="tab-pane show active" id="principles" role="tabpanel" aria-labelledby="principles-tab">
                    <h2>編輯原則</h2>
                    <p>呢本辭典跟以下原則蒐集、編輯辭彙：</p>
                    <div className="accordion" id="pripciples-accordion">
                        <Accordion title="唔收5P字同英數字俗寫" headingId="abbrs" bodyId="abbrs-body" parentId="principles-accordion">
                            <p>為咗保護廣東話嘅書寫系統，呢本辭典一律唔收5P字。</p>
                        </Accordion>
                        <Accordion title="唔用假正字" headingId="orthography" bodyId="orthography-body" parentId="principles-accordion">
                            <p>為咗保護廣東話嘅書寫系統，避免鼓吹支持偽學術，呢本辭典一律唔收未經考證或者考證粗疏嘅寫法。
                                如果無字可以寫，會直接用粵拼寫詞條。例如：</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>用</th>
                                        <th>唔用</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-success">鬼馬</td>
                                        <td className="text-danger">鬼衇</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">mang4</td>
                                        <td className="text-danger"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>如果想知道「假正字」係乜嘢，可以參考呢篇
                                <a href="https://gongjyuhok.hk/articles/1373">「港語學」</a>
                                文章。
                            </p>
                        </Accordion>
                        <Accordion title="異體字唔另外開詞條" headingId="variants" bodyId="variants-body" parentId="principles-accordion">
                            <p>為咗令辭典更加精簡，有異體字嘅字詞，唔另外列詞條，只以括弧喺原詞條隔籬標明，以現今常見寫法為先。例如：</p>
                            <div>
                                <h3>橋樑</h3>
                                <span>（又橋梁）[kiu4 loeng4]</span>
                            </div>
                        </Accordion>
                        <Accordion title="發音從眾不泥古" headingId="pronunciations" bodyId="pronunciations-body" parentId="principles-accordion">
                            <p>為咗保護廣東話音韻系統，避免鼓吹盲信權威嘅風氣，發音基本上跟從一般大眾常見嘅發音（懶音除外）；
                               但為方便參考，何文匯提出嘅所謂「正音」只會喺單字詞條列明。例如：</p>
                            <div>
                                <h3>雛</h3>
                                <span>[co1; 又co4]</span>
                                <p>...</p>
                                <h3>雛形</h3>
                                <span>[co1 jing4]</span>
                            </div>
                            <p>如果想知道「何文匯正音」係乜嘢，可以參考呢本
                                <a href="https://www.savepropercantonese.com/">石見田嘅著作</a>
                                。
                            </p>
                        </Accordion>
                    </div>
                </div>
                <div className="tab-pane" id="entry-cat" role="tabpanel" aria-labelledby="entry-cat-tab">
                    <h2>辭彙體系</h2>
                    <p>呢本辭典蒐集嘅辭彙有：</p>
                    <ul>
                        <li>成語：有典故可尋嘅詞組，例如：「東施效顰」、「三長兩短」等。</li>
                        <li>慣用語：缺少成語嘅特徵，但係形式好似成語嘅詞組，例如：「總而言之」、「風和日麗」等。</li>
                        <li>歇後語：兼具成語同慣用語嘅特徵，通常以謎面同謎底組成，例如：「過街老鼠——人人喊打」、「老公撥扇——淒涼」等。</li>
                        <li>半固定語：……，如「耍花槍」、「大龍鳳」等。</li>
                        <li>諺語：格言、俗語等平時常見嘅語言資料，例如「五時花，六時變」、「馬死落地行」等。</li>
                        <li>外來語：已經凝固喺香港粵語嘅外來語，例如「士多啤梨」、「巴士」等。</li>
                        <li>專門用語：名人人名、地名、事物名或者專業術語。</li>
                    </ul>
                </div>
                <div className="tab-pane" id="arrangement" role="tabpanel" aria-labelledby="arrangement-tab">
                    <h2>排列原則</h2>
                    <p></p>
                </div>
                <div className="tab-pane" id="details" role="tabpanel" aria-labelledby="details-tab">
                    <h2>凡例要點</h2>
                    <div className="accordion" id="details-accordion">
                        <Accordion title="一般" headingId="general" bodyId="general-body" parentId="details-accordion">
                            <p></p>
                        </Accordion>
                        <Accordion title="外來詞" headingId="foreign" bodyId="foreign-body" parentId="details-accordion">
                            <p>除非某個外來詞……。例如：</p>
                        </Accordion>
                        <Accordion title="歐化詞" headingId="euro" bodyId="euro-body" parentId="details-accordion">
                            <p>除非某個歐化詞無相應粵語辭彙，否則只列出詞條同參照，唔會另外說明。例如：</p>
                        </Accordion>
                        <Accordion title="兩岸三地詞語" headingId="strait" bodyId="strait-body" parentId="details-accordion">
                            <p>無論係中國定係臺灣嘅詞語，除非佢哋無相應粵語辭彙，否則只列出詞條同參照，唔會另外說明。例如：</p>
                            <div>
                                <h3>視頻</h3>
                                <span>[si6 pan4]</span>
                                <p>&rarr;片、影片、影像</p>
                            </div>
                        </Accordion>
                    </div>
                </div>
                <div className="tab-pane" id="disclaimer" role="tabpanel" aria-labelledby="disclaimer-tab">
                    <h2>免責聲明</h2>
                    <p>用呢本辭典嘅時候要注意：</p>
                    <ul>
                        <li>呢本辭典裏面嘅字形唔係唯一標準，只供參考。</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Usage;
