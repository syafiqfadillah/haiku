import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AnimatedPage from './AnimatedPage'

import haiku from '../Assets/Image/WorldMap.png'
import profile from '../Assets/Image/pp.jpeg'

const Article = () => {
    return (
        <>
            <Header/>
            <AnimatedPage>
                <main className="container arContainer text-light my-5">
                    <div className="m-auto">
                        <div className="col-md-12">
                            <div className="arProfSec d-flex w-100">
                                <img src={profile} alt="Article Image Profile" className='rounded-circle' />
                                <div className="contArProf">
                                    <div className="arNameProf">
                                        <div className="arName">
                                            <h4 className='fw-bold'>Jason Stotot</h4>
                                            <p className='fw-lighter'>Member</p>
                                        </div>
                                        <div className="arProfMedsos">
                                            <i class="bi bi-twitter"></i>
                                            <i class="bi bi-instagram"></i>
                                            <i class="bi bi-pinterest"></i>
                                            <i class="bi bi-facebook"></i>
                                        </div>
                                    </div>
                                    <div className="arBtnProf">
                                        <button className='arBtn'>Follow</button>
                                        <button className='arBtn'>Message</button>
                                    </div>
                                </div>
                            </div>
                            <img src={haiku} alt="" className='arPoster rounded my-5'/>
                            <h2 className="pb-4 mb-4 fw-bold border-bottom">
                                LEARN JAWA SCRIPT WITH URANG JAWA
                            </h2>
                            <h5 className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque vel repellendus totam similique, adipisci tempore non facilis molestiae. Similique magnam quo voluptas, totam assumenda eligendi cumque aspernatur dignissimos labore earum est officiis error iure at hic. Dolor molestiae ratione vitae in magni adipisci rem quae, nulla animi ea laboriosam, totam autem tempora! Exercitationem voluptates voluptatum laudantium quidem ipsa quo impedit esse quas velit incidunt, culpa, reprehenderit ut. Cum atque debitis placeat at ut, doloremque, beatae, autem repellat deleniti eum hic? Iusto magnam reprehenderit ex animi modi unde fugiat deserunt quibusdam necessitatibus, sunt molestiae dignissimos praesentium facere? Incidunt, laboriosam officia. Porro nam tempora molestias, repudiandae id illo repellendus voluptates asperiores. Maiores quia reprehenderit eligendi? Ratione explicabo adipisci officiis. Cupiditate, natus aspernatur? Error dicta nihil harum sapiente impedit numquam illo dolores vel nostrum earum? Nihil praesentium blanditiis quidem voluptatum reprehenderit fugit rem, dolorem asperiores voluptatem iste aliquam quibusdam aliquid numquam, eos itaque ut velit necessitatibus, odit harum. Eum autem nesciunt voluptatem modi aperiam optio officiis impedit perferendis atque nam nobis nemo, doloremque delectus dicta ipsam dolorem ullam dolores saepe laborum pariatur necessitatibus eligendi deleniti, consectetur tempora. Error veritatis voluptas dolor! Adipisci, optio sit. Provident laboriosam a quaerat veritatis, adipisci nam, voluptate at reiciendis alias officia iure! Asperiores qui animi veniam totam repellat ipsa, vel, fuga sit, quo placeat mollitia blanditiis dolorum eum quibusdam temporibus aliquam id voluptatum distinctio ipsam ducimus impedit labore odit atque dicta. Voluptate soluta perferendis nemo. Voluptate aspernatur officia obcaecati vel numquam ducimus! Minima, mollitia vitae. Dolor, alias quod eveniet est deleniti eaque voluptatem necessitatibus commodi perferendis tempore velit rerum veritatis, explicabo esse itaque quis aut ipsum eligendi laboriosam adipisci minima unde tenetur. Praesentium consequatur quas eaque, quasi at dolorem dolor blanditiis temporibus esse reprehenderit doloremque deleniti rem officia exercitationem unde eos sequi quos laboriosam explicabo distinctio delectus. Saepe odit minima eligendi placeat dolore fugit nisi eius provident quibusdam corporis in eaque consectetur assumenda accusantium, unde, illum sed eum minus. Maiores porro mollitia minus eveniet, id enim assumenda error! Quis magnam id veritatis, optio ipsa pariatur debitis dignissimos in saepe accusantium voluptatibus rerum quia amet illum illo at quae nisi doloribus deserunt dolor consequatur cumque deleniti officia. Quo, alias reiciendis. Fugit voluptates quasi expedita iure ut sit, laborum dicta officia consequatur itaque enim obcaecati at necessitatibus asperiores voluptatibus odit praesentium suscipit. Nulla deleniti veritatis sunt animi, itaque maxime incidunt laboriosam illo temporibus, dolores autem quod, est beatae! Necessitatibus, culpa exercitationem. Totam laborum porro perferendis fugit quia, aliquam hic? Eligendi sapiente aut tenetur fugiat amet fuga similique doloremque voluptatum corrupti, et consequatur iste rerum dolorem dolor dolorum corporis delectus id est temporibus sint debitis natus omnis ullam enim. At voluptate et possimus rerum dicta, officiis voluptatibus necessitatibus sint non cupiditate atque nesciunt corporis tempore molestias incidunt esse dolorem. Exercitationem omnis nulla illum. Ipsa exercitationem ex quos sit praesentium explicabo dolores optio, magnam omnis excepturi quasi natus incidunt non sapiente quod quidem doloribus doloremque enim. Assumenda consequatur nemo neque amet deleniti, dolorem placeat adipisci? Culpa facilis repellendus quis error iure?</h5>
                        </div>
                    </div>
                </main>
            </AnimatedPage>
            <Footer/>
        </>
    )
}

export default Article