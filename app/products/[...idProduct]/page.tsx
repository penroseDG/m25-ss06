import React from 'react'

interface Params {
    product: string[];
}

interface Props {
    product: Params;
}

export default function ProductDetail(props: any) {
    console.log("prop", props);
    const {params} = props;
    return (
        <div>   
            trang chi tiet san pham !
            id san pham : {params.product} ;
        </div>
    )
}