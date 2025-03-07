import { Button, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRouter } from "next/navigation";

export default function BbsList({list, cp, totalPage}){
    const router = useRouter();
    return(
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell align="right">제목</TableCell>
            <TableCell align="right">글쓴이</TableCell>
            <TableCell align="right">날짜</TableCell>
            <TableCell align="right">조회수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.b_idx}
              </TableCell>
              <TableCell align="right">{row.subject}</TableCell>
              <TableCell align="right">{row.writer}</TableCell>
              <TableCell align="right">{row.wirter_date}</TableCell>
              <TableCell align="right">{row.hit}</TableCell>
            </TableRow>
           ))}
           <TableRow>
            <TableCell colSpan={4}>
                <Pagination count={totalPage} color="primary" 
                onChange={cp}/>
            </TableCell>
            <TableCell align="right">
                <Button variant="contained" color="primary" onClick={() => {
                    // 화면연결하기
                    router.push("/write");
                }}>글쓰기</Button>
            </TableCell>
           </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
}