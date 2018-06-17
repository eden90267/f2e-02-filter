import React from 'react'
import MapIcon from 'react-icons/lib/fa/map-marker'
import CalendarIcon from 'react-icons/lib/fa/calendar'

import 'components/SearchContent.scss'

const SearchContent = () =>
  <section className="search-content">
    <h3>Showing <span className="search-content_count">15</span> results by…</h3>
    <ul className="list-unstyled search-content_result">
      <li className="media mb-4">
        <img className="mr-3" src="http://khh.travel/FileArtPic.ashx?id=705&w=1280&h=960"/>
        <div className="media-body">
          <h4 className="mt-0 mb-3">高雄願景館</h4>
          <p className="mb-3">
            高雄願景館的前身是日治時期興建的高雄市舊火車站，外觀是”和洋混合式建築”氣勢雄偉，內部則為西式的玄關及大廳。2002年為了配合鐵路、捷運、高鐵的三鐵共構，這棟老火車站建築物遷移到附近的空地上，並由市府規劃，以"數位博物館"的型式，其中歷史迴廊對於鐵道文化及往日風貌有一系列回顧，讓遊客可以重溫老車站的過往風華，而3D虛擬互動區則讓參觀者以虛擬實境的方式飛越高雄的重要景點並同時見證高雄的發展歷史。願景館是認識高雄過去與未來的最佳場所，而願景橋、鐵路文化棧道、風的祝福廣場…等公共藝術區也是遊客們最愛駐足與拍照留念的美麗景點。
          </p>
          <ul className="list-inline mb-3">
            <li className="list-inline-item font-weight-bold">門票說明</li>
            <li className="list-inline-item">
              <span className="search-content_result-item_ticket-info">免費參觀</span>
            </li>
          </ul>
          <ul className="list-unstyled d-flex">
            <li className="d-flex align-items-center">
              <MapIcon style={{marginRight: 7}}/>
              <span className="search-content_result-item_address">高雄市三民區建國二路318號</span>
            </li>
            <li className="d-flex align-items-center">
              <CalendarIcon style={{marginRight: 7}}/>
              <span className="search-content_result-item_opentime">全天候開放</span>
            </li>
          </ul>
        </div>
      </li>
      <li className="media mb-4">
        <img className="mr-3" src="http://khh.travel/FileArtPic.ashx?id=705&w=1280&h=960"/>
        <div className="media-body">
          <h4 className="mt-0 mb-3">高雄願景館</h4>
          <p className="mb-3">
            高雄願景館的前身是日治時期興建的高雄市舊火車站，外觀是”和洋混合式建築”氣勢雄偉，內部則為西式的玄關及大廳。2002年為了配合鐵路、捷運、高鐵的三鐵共構，這棟老火車站建築物遷移到附近的空地上，並由市府規劃，以"數位博物館"的型式，其中歷史迴廊對於鐵道文化及往日風貌有一系列回顧，讓遊客可以重溫老車站的過往風華，而3D虛擬互動區則讓參觀者以虛擬實境的方式飛越高雄的重要景點並同時見證高雄的發展歷史。願景館是認識高雄過去與未來的最佳場所，而願景橋、鐵路文化棧道、風的祝福廣場…等公共藝術區也是遊客們最愛駐足與拍照留念的美麗景點。
          </p>
          <ul className="list-inline mb-3">
            <li className="list-inline-item font-weight-bold">門票說明</li>
            <li className="list-inline-item">
              <span className="search-content_result-item_ticket-info">免費參觀</span>
            </li>
          </ul>
          <ul className="list-unstyled d-flex">
            <li className="d-flex align-items-center">
              <MapIcon style={{marginRight: 7}}/>
              <span className="search-content_result-item_address">高雄市三民區建國二路318號</span>
            </li>
            <li className="d-flex align-items-center">
              <CalendarIcon style={{marginRight: 7}}/>
              <span className="search-content_result-item_opentime">全天候開放</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <nav className="d-flex justify-content-end">
      <ul className="pagination pagination-lg">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </section>


export default SearchContent
