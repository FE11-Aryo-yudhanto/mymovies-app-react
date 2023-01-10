import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import Layout from 'components/Layout'
import Loader from 'components/Loader'
import Card from 'components/Card'

import { setFavorites } from 'utils/redux/reducers/reducer'
import { useTitle } from 'utils/hooks/customHooks'
import { DatasType, } from 'utils/types/movie'
import { RootState } from 'utils/types/redux'

const Favorite = () => {
  useTitle("Movie21 - Your Favorite Movie")
  const dispatch = useDispatch()
  const datas = useSelector((state: RootState) => state.data.favorites)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    loadingPage()
  }, [])

  function loadingPage() {
    setLoading(false);
  }

  function removeFavMovie(data: DatasType) {
    let dupeDatas: DatasType[] = datas.slice()
    const filterData = dupeDatas.filter((item) => item.id !== data.id)

    localStorage.setItem("FavMovie", JSON.stringify(filterData))
    dispatch(setFavorites(filterData))
    alert(`Delete ${data.title} from favorite list`);
  }

  return (
    <Layout>
      <div className='mx-12 pt-12'>
        <h2 className={`font-bold text-2xl text-white`}>Favorite Movie</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-3'>
        {loading ? (
          <Loader />
        ) : (
          datas.map((data) => (
            <Card
              id={data.id}
              key={data.id}
              title={data.title}
              image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              overview={data.overview.substring(0, 50) + "..."}
              button1_name="Delete From Favorite"
              onClickFav={() => removeFavMovie(data)}
            />
          ))
        )}
      </div>
    </Layout>
  )
}

export default Favorite