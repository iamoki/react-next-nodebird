import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => (
    <div>
        {/* 해시태그와 추출해내기 */}
        {postData.split(/(#[^\s#]+)/g).map((v, i) => {
            if(v.match(/(#[^\s#]+)/)) {
                return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
            }
            return v;
        })}
    </div>  
);

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired
};

export default PostCardContent;