import React from 'react'
import {useParams} from "react-router";
import {newsData} from "../../data/newsData";
import classNames from "classnames";

const NewsPage = () => {
    const params = useParams()
    const currentNews = newsData.filter(news => news.type === params.newsType)

    return (
        <section className='news-page'>
            <div className='news-container'>
                <div className='news-page__body'>
                    <div className='news-page__header'>

                    </div>
                    <div className='news-page__list-block'>
                        <div className='news-page__list'>
                            {
                                currentNews[0].newsList.map((news, index) => (
                                    <div className={classNames('news', news.clName)} key={index}>
                                        <h1 className={classNames('news-title', 'title', news.clName)}>{news.ArticleTitle}</h1>
                                        {
                                            news.clName ? (
                                                <div className='text-group'>
                                                    <h1 className='title news-title custom-title'>{news.ArticleTitle}</h1>
                                                    <p className='news-text'>Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing elit. Ab, accusamus adipisci alias asperiores aut
                                                        beatae commodi delectus dicta doloribus esse ex facere illo
                                                        illum itaque iure labore laboriosam magni molestias neque nulla
                                                        numquam odit optio porro quam quasi quia quidem quos repellat
                                                        saepe sapiente similique sint suscipit tempore tenetur ullam
                                                        unde voluptate! Alias aliquid doloremque fugit libero quae.
                                                        Mollitia, vitae?</p>
                                                </div>
                                            ) : (
                                                <p className='news-text'>Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Ab, accusamus adipisci alias asperiores aut beatae
                                                    commodi delectus dicta doloribus esse ex facere illo illum itaque
                                                    iure labore laboriosam magni molestias neque nulla numquam odit
                                                    optio porro quam quasi quia quidem quos repellat saepe sapiente
                                                    similique sint suscipit tempore tenetur ullam unde voluptate! Alias
                                                    aliquid doloremque fugit libero quae. Mollitia, vitae?</p>
                                            )
                                        }
                                        {
                                            news.ArticleNote && (
                                                <div className='news-note'>
                                                    {news.ArticleNote}
                                                </div>
                                            )
                                        }
                                        {
                                            news.ArticleTextS && (
                                                <>
                                                    {
                                                        news.clName ? (
                                                            <div className='text-group'>
                                                                <h1 className='title news-title custom-title'>{news.ArticleTitle}</h1>
                                                                <p className='news-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus adipisci alias asperiores aut beatae commodi delectus dicta doloribus esse ex facere illo illum itaque iure labore laboriosam magni molestias neque nulla numquam odit optio porro quam quasi quia quidem quos repellat saepe sapiente similique sint suscipit tempore tenetur ullam unde voluptate! Alias aliquid doloremque fugit libero quae. Mollitia, vitae?</p>
                                                            </div>
                                                        ) : (
                                                            <p className='news-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus adipisci alias asperiores aut beatae commodi delectus dicta doloribus esse ex facere illo illum itaque iure labore laboriosam magni molestias neque nulla numquam odit optio porro quam quasi quia quidem quos repellat saepe sapiente similique sint suscipit tempore tenetur ullam unde voluptate! Alias aliquid doloremque fugit libero quae. Mollitia, vitae?</p>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                        {

                                        }
                                        {
                                            news.ArticleList && (
                                                <ol className='news-list-d'>
                                                    {
                                                        news.ArticleList.map((listIt, ind) => (
                                                            <li key={ind} className='news-item'>{listIt.title}</li>
                                                        ))
                                                    }
                                                </ol>
                                            )
                                        }
                                        {
                                            news.ArticleTextT && (
                                                <>
                                                    <h4 className='title news-title custom-title'>{news.ArticleTitle}</h4>
                                                    <p className='news-text news-text-custom'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus adipisci alias asperiores aut beatae commodi delectus dicta doloribus esse ex facere illo illum itaque iure labore laboriosam magni molestias neque nulla numquam odit optio porro quam quasi quia quidem quos repellat saepe sapiente similique sint suscipit tempore tenetur ullam unde voluptate! Alias aliquid doloremque fugit libero quae. Mollitia, vitae?</p>
                                                </>
                                            )
                                        }
                                        {
                                            news.ArticleTextTr && (
                                                <div className='text-group'>
                                                    <h4 className='title news-title custom-title'>{news.ArticleTitle}</h4>
                                                    <p className='news-text news-text-custom'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus adipisci alias asperiores aut beatae commodi delectus dicta doloribus esse ex facere illo illum itaque iure labore laboriosam magni molestias neque nulla numquam odit optio porro quam quasi quia quidem quos repellat saepe sapiente similique sint suscipit tempore tenetur ullam unde voluptate! Alias aliquid doloremque fugit libero quae. Mollitia, vitae?</p>
                                                </div>
                                            )
                                        }
                                        {
                                            news.joinImg && (
                                                <div className='join-img__block'>
                                                    <img src={news.joinImg} alt=""/>
                                                    <div className='join-img__link'>
                                                        подключайтесь
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            news.ArticleLinks && (
                                                <div>
                                                    links
                                                </div>
                                            )
                                        }
                                        {
                                            news.ArticleTextFo && (
                                                <p className='news-text fourth-text'>Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Ab, accusamus adipisci alias asperiores aut beatae
                                                    commodi delectus dicta doloribus esse ex facere illo illum itaque
                                                    iure labore laboriosam magni molestias neque nulla numquam odit
                                                    optio porro quam quasi quia quidem quos repellat saepe sapiente
                                                    similique sint suscipit tempore tenetur ullam unde voluptate! Alias
                                                    aliquid doloremque fugit libero quae. Mollitia, vitae?</p>
                                            )
                                        }
                                    </div>
                                ))
                            }
                            <div className='article-author__block'>
                                <div className='auth-left-side'>
                                    <span className='auth-title'>Автор:</span>
                                    <span className='auth'>{currentNews[0].auth}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsPage