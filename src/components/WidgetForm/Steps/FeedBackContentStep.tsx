import { FeedBackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface IFeedBackContent {
    feedBackType: FeedBackType;
}



export const FeedBackContentStep = ({ feedBackType }: IFeedBackContent) => {
    const feedBackTypesInfos = feedBackTypes[feedBackType]; //pegar apenas o que a pessoa escolheu

    return (
        <>
            <header>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedBackTypesInfos.image.source} alt={feedBackTypesInfos.image.alt} className="w-6 h-6" />
                    {feedBackTypesInfos.title}
                </span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">


            </div>
        </>
    );
}