import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import otherImageUrl from '../../assets/thought.svg'

import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";

export const feedBackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Image de uma lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    },
}

export type FeedBackType = keyof typeof feedBackTypes

// keyof e pegar as key e typeof e pegar o objeto como tipo

export const WidgetForm = () => {
    const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null)
    const [feedBackSend, setFeedBackSend] = useState(false)

    const handleRestartFeedback = () => {
        setFeedBackSend(false)
        setFeedBackType(null)
    }

    return (
        <div className="
        	    bg-zinc-900 
                p-4 
                relative 
                rounded-2xl 
                mb-4 
                flex flex-col items-center 
                shadow-lg 
                w-[calc(100vw-2rem)]
                md:w-auto
        ">
            {feedBackSend ? (
                <FeedBackSuccessStep onReset={handleRestartFeedback} />
            ) : (
                <>
                    {!feedBackType ? (
                        <FeedBackTypeStep onFeedBackTypeChange={setFeedBackType} />
                    ) : (
                        <FeedBackContentStep
                            feedBackType={feedBackType}
                            onReset={handleRestartFeedback}
                            onFeedBackSend={() => setFeedBackSend(true)}
                        />
                    )
                    }
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div >
    );
}

//w-[calc(100vw-2rem)] //ocultado toda largura
//md:w-auto para tamanho de telas médio ele vai deixar automático

//md: e criar responsividade

