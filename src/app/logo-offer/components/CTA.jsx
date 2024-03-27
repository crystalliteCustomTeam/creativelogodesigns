const CTA = ({ href = "javascript:;", text, variant, classes }) => {
    switch (variant) {
        case "primary":
            return (
                <div dangerouslySetInnerHTML={{
                    __html: `
                    <a href=${href} class="inline-flex items-center transition-colors text-[18px] font-semibold leading-tight bg-yellow-500 text-black h-[50px] px-5 hover:bg-[#cbdaff] rounded-[0_15px_15px_15px] ${classes}">
                        ${text}
                    </a>
                ` }} />
            )
        case "secondary":
            return (
                <div dangerouslySetInnerHTML={{
                    __html: `
                    <a href=${href} class="inline-flex items-center transition-colors text-[18px] font-semibold leading-tight hover:bg-yellow-500 text-black h-[50px] px-5 bg-[#cbdaff] rounded-[0_15px_15px_15px] ${classes}">
                        ${text}
                    </a>
                ` }} />
            )
        default:
            return (
                <div dangerouslySetInnerHTML={{
                    __html: `
                    <a href=${href} class="text-[16px] lg:text-[14px] xl:text-[18px] font-semibold transition-colors leading-tight inline-block ${classes}">
                        ${text}
                    </a>
                ` }} />
            )
    }
}

export default CTA