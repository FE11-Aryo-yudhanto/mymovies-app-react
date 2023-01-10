import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import Carousel from 'components/Carousel'
import Layout from 'components/Layout'
import Loader from 'components/Loader'
import Card from 'components/Card'

import { setFavorites } from 'utils/redux/reducers/reducer'
import { useTitle } from 'utils/hooks/customHooks'
import { DatasType } from 'utils/types/movie'

const App = () => {
  useTitle("Movie21 - Now Playing Movie")
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(true)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [search, setSeacrh] = useState<string>("")
  const [datas, setDatas] = useState<DatasType[]>([])
  const [page, setPage] = useState<number>(1)


  function fetchData(page: number) {
    axios.get(`now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`)
      .then((data) => {
        const { results, total_pages } = data.data
        setDatas(results)
        setTotalPage(total_pages)
      }).catch((err) => {
      }).finally(() =>
        setLoading(false))
  }

  console.log('search key', search)
  // function searchMovie() {
  //   axios.get(`https://api.themoviedb.org/3/movie/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
  //     .then((data) => {
  //       console.log("search data:", data.data.results)
  //       alert("berhasil")
  //     }).catch((err) => {
  //       console.log("search gagal:", err)
  //     }).finally(() =>
  //       setLoading(false))
  // }

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function handleFavorite(data: DatasType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      /*
      TODO: Sebelum ditambahkan ke list favorit, silahkan buat pengkondisian/cek 
      terlebih dahulu apakah film yang dipilih sudah ditambahkan atau belum, kasih alert jika ada, jika tidak silahkan push datanya ke localstorage
      */
      let parseFav: DatasType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
      dispatch(setFavorites(parseFav))
      alert("Movie added to favorite");
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Movie added to favorite");
    }
  }

  useEffect(() => {
    fetchData(1)
  }, [])

  // useEffect(() => {
  //   searchMovie()
  // }, [])

  return (
    <Layout
    // onChangeSearch={(e) => setSeacrh(e.target.value)}
    // onSubmitSearch={() => searchMovie()}
    // onclickSearch={() => searchMovie()}
    >
      {!loading && (
        <Carousel
          datas={datas.slice(0, 9)}
          content={(data) => (
            <div
              className='w-full h-full flex justify-center items-center bg-cover bg-center dark:opacity-90'
              style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
              }}
            >
              <p className="text-white tracking-widest font-bold break-words text-2xl text-center">
                {data.title}
              </p>
            </div>
          )
          }
        />
      )
      }
      <div className='mx-12 pt-12'>
        <h2 className={`font-bold text-2xl text-white dark:text-black`}>Playing Now!!!</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-3 m-3'>
        {loading ? (
          <Loader />
        ) : (
          datas.map((data) => (
            <Card
              id={data.id}
              key={data.id}
              title={data.title}
              image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              overview={data.overview.substring(0, 45) + "..."}
              button1_name="Add To Favorite"
              onClickFav={() => handleFavorite(data)}
            />
          ))
        )}
      </div>
      <div className="btn-group w-full justify-center">
        <button
          className="btn bg-base-100 text-white"
          onClick={() => prevPage()}
          disabled={page === 1}
        >
          «
        </button>
        <button className="normal-case bg-base-100 text-white rounded-none">Page {page}</button>
        <button
          className="btn bg-base-100 text-white"
          onClick={() => nextPage()}
          disabled={page === totalPage}
        >
          »
        </button>
      </div>
    </Layout >
  )
}

export default App
