import React, { useEffect, useState } from "react";
import { PostContainer } from "containers";
import { PostCard } from "components/organisms";
import { StandardTemplate } from "components/templates";
import { Container } from "./styles";

const PostPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
        "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
    ]);
    const [canClick, setCanClick] = useState<boolean>(false);
    const [isLike, setIsLike] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");

    const content = `TIEB 소프트터치 터틀넥 가디건의 마지막 3차 (입고 소식을 전합니다.
        \n니트는 제가 가장 깊히 알고 있는 분야이다보니 아무래도 신경이 더욱 쓰이지만, 그만큼 개인적인 애착의 마음도 큽니다. 때문에 이 제품엔 좀처럼 제게 없는 완벽주의적인 집착과 창작에 대한 순수한 기쁨이 모두 담겨 있습니다.`;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    useEffect(() => {
        if (comment) setCanClick(true);
        else setCanClick(false);
    }, [comment]);

    return (
        <StandardTemplate>
            <Container>
                <PostContainer
                    canClick={canClick}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                    moreOnClick={() => {}}
                />
            </Container>
        </StandardTemplate>
    );
};

export default PostPage;
