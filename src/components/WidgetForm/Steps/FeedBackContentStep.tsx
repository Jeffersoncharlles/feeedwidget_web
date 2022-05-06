import { ArrowLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { FeedBackType, feedBackTypes } from "..";
import { api } from "../../../service/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenShotButton } from "../ScreenShotButton";

interface IFeedBackContent {
    feedBackType: FeedBackType;
    onReset: () => void;
    onFeedBackSend: () => void
}



export const FeedBackContentStep = ({ feedBackType, onReset, onFeedBackSend }: IFeedBackContent) => {
    const [screeShot, setScreenShot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const [isSendFeedback, setIsSendFeedback] = useState(false)

    const feedBackTypesInfos = feedBackTypes[feedBackType]; //pegar apenas o que a pessoa escolheu

    const handleSubmitFeedBack = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSendFeedback(true)
        await api.post('feedbacks', {
            type: feedBackType,
            comment,
            screenshot: screeShot
        })
        setIsSendFeedback(false)
        onFeedBackSend();
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    onClick={onReset}
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedBackTypesInfos.image.source} alt={feedBackTypesInfos.image.alt} className="w-6 h-6" />
                    {feedBackTypesInfos.title}
                </span>
                <CloseButton />
            </header>
            <form className="my-4 w-full" onSubmit={handleSubmitFeedBack}>
                <textarea
                    className="
                        min-w-[304px] w-full min-h-[112px] 
                        text-sm placeholder-zinc-400 
                        text-zinc-100 
                        border-zinc-600
                        bg-transparent
                        rounded-md
                        focus:border-brand-500
                        focus:outline-none
                        focus:ring-brand-500
                        focus:ring-1
                        resize-none
                        scrollbar
                        scrollbar-thumb-zinc-700
                        scrollbar-track-transparent
                        scrollbar-thin
                    "
                    onChange={e => setComment(e.target.value)}
                    placeholder="Conte com detalhes o que esta acontecendo"

                />
                <footer className="flex gap-2 mt-2">

                    <ScreenShotButton onScreenShot={setScreenShot} screenshot={screeShot} />

                    <button
                        type="submit"
                        disabled={comment.length === 0 || isSendFeedback}
                        className="
                            p-2
                            bg-brand-500
                            rounded-[4px]
                            border-transparent
                            flex-1
                            flex
                            justify-center
                            items-center
                            text-sm
                            hover:bg-brand-300
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-offset-zinc-900
                            focus:ring-brand-500
                            transition-colors
                            disabled:opacity-50
                            disabled:hover:bg-brand-500
                        "
                    >
                        {isSendFeedback ? <Loading /> : `Enviar FeedBack`}
                    </button>
                </footer>
            </form>
        </>
    );
}