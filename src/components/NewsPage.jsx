import React from 'react';
import { useParams } from 'react-router';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = () => {
const param = useParams();
const category = param['*'] || 'all';

return (
    <>
        <Categories category={category} />
        <NewsList category={category} />
    </>
 );
};

export default NewsPage;
