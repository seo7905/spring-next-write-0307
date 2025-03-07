'use client';
import BbsList from "@/component/BbsList";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  const API_URL = "/board/list";

  const [bname, setBname] = useState('BBS');
  const [list, setList] = useState([]);
  const [cPage, setCpage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  // 비동기식 통신을 하는 함수
  function callData(){
    axios.get(
      API_URL,
      {params:{bname:bname, cPage:cPage}} // 파라미터 주는 방식 ? 뒤에 = 하는 것보단 훨씬 체계적으로 보인다.
    ).then((json) => { // 서버의 데이터가 도착하는 지점(then)
      // console.log(json.data.totalPage);
      setList(json.data.ar);
      setTotalPage(json.data.totalPage);
    });
  }

  useEffect(() => 
    {callData(); 
  },[]);

  // function changePage(e){
  //   console.log('cp:'+e.target.innerText); // e.target이니깐 tag가 넘어올듯?
  // }
  const changePage = (e,p) => {
  // function changePage(e, p){
  //   // Pagination에서 호출하는 함수는 두번째 인자로 페이지 값을 자동으로 전달 함
    console.log('changepage:'+p);
    setCpage(p);
    callData();
  }

  return (
    <div className={styles.page}>
     {/* cp라는 이름으로 changePage 함수 전달 */}
     <BbsList list={list} totalPage={totalPage} cp={changePage}/> 
    </div>
  );
}
