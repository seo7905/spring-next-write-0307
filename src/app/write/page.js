'use client';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Write() {
    const router = useRouter();

    const API_URL = "/board/add";

    // 서버로 보낼 파라미터 값들을 객체로 준비한다.
    const[vo, setVo] = useState({
        subject:"",
        writer:"",
        content:"",
    });

    function changeVO(e){
        let bbs = {...vo}; // 복사!
        let value = e.target.value; // 사용자가 입력한 문자열
        let name = e.target.name; // 문자열 입력한 input태그의 name
        // console.log(name+":"+value);
        // bbs.name = value;
        bbs[name] = value;
        setVo(bbs);
        //위의 내용을 한줄로 한다면...
       // setVo({...vo, [e.target.name]:e.target.value});
    }
    
    // function saveData(){
    const saveData = () => {
        // console.log(vo); // 서버로 보내고자 하는 값이 모두 있어야 한다.
        axios.post(API_URL,
           {subject: vo.subject, writer:vo.writer, content:vo.content, bname:"BBS"}
        ).then((json) => {
            // 저장 성공 시 서버가 cnt변수에 1을 넣어서 보낸다.
            if(json.data.cnt == 1)
                router.push('/');
        })
    }

    return (
        <div className={styles.page}>
            <TableContainer component={Paper} sx={{ maxWidth: 600, margin: "auto" }}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell>제목</TableCell>
                            <TableCell>
                                <input type="text" name="subject" style={{ width: "250px" }} onChange={changeVO} />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>글쓴이</TableCell>
                            <TableCell>
                                <input type="text" name="writer" style={{ width: "200px" }} onChange={changeVO}/>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>내용</TableCell>
                            <TableCell>
                                <textarea name="content" rows={7} cols={50} onChange={changeVO}/>
                            </TableCell>
                        </TableRow>
                       
                        <TableRow>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={saveData}>글쓰기</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
