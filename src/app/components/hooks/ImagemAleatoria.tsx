'use client';

import Image from "next/image"
import { useState } from "react";

export default function ImagemAleatoria() {

    const [pesquisa, setPesquisa] = useState<string>('abstract');
    const [tamanho, setTamanho] = useState<number>(300);

    const url = 'https://source.unsplash.com/featured/300x300?';    

    function urlImagem(){
        return `${url}${pesquisa}`
    }

    function renderizarBotao(valor: string) {
        return (
            <button className={
                `
                bg-blue-500
                px-4
                py-2
                rounded-md
                cursor-pointer
                `
            } onClick={ ()=>{
                setPesquisa(valor);
                console.log(urlImagem());
            }}
            >
                {valor}
            </button>
        )
    }

    return (
        <div className={`
            flex 
            flex-col 
            gap-3
            border
            border-zinc-500
            p-7
            rounded-md
            `
            } >
                <Image src={urlImagem()} width={300} height={300} alt="Image" />
                <div className="flex justify-between gap-5">
                    {renderizarBotao('abstract')}
                    {renderizarBotao('city')}
                    {renderizarBotao('person')}
                    <input 
                        type="number"
                        value={tamanho}
                        className="bg-zinc-800 p-2 rounded-md outline-none"
                    />   
                </div>
        </div>
    )
}