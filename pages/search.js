import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';

function Search({results}) {
    const router = useRouter();
    console.log(results);
    return (
        <div>
            <Head>
                <title>{router.query.term} - Great Search</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header/>
            <SearchResults results={results}/>
        </div>
    );
}

export default Search;
/* Fetch search data using Google's custom search api */
export async function getServerSideProps(context) {
    const startIndex = context.query.start || '0';
    const API_KEY = 'AIzaSyCzig1axd5p1TG512r5S2InwjOaXwo_NC4';
    const CONTEXT_KEY = 'c45b4a0a8fc877f80';
    
    const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
        ).then(response => response.json());

    /* Pass result after server rendered */
    return {
        props: {
            results: data,
        }
    }
}