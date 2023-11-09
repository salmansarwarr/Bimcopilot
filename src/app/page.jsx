import Main from "../components/Main/main";
import axios from 'axios'

const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/blog");
    return res.data.data; 
};

export default async function Home() {
    const data = await fetchData();

    return (
        <>
            <Main stories={data}/>
        </>
    );
}
