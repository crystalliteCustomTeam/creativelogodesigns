const CTA = ({ href, text, variant = "primary" }) => {
    switch (variant) {
        case "primary":
            return (
                <div dangerouslySetInnerHTML={{
                    __html: `
                    <a href=${href} class="inline-flex items-center gap-2">
                        ${text}
                    </a>
                ` }} />
            )
        case "secondary":
            return (
                <div dangerouslySetInnerHTML={{
                    __html: `
                    <a href=${href} class="inline-flex items-center gap-2">
                        ${text}
                    </a>
                ` }} />
            )
        default:
            return null
    }
}

export default CTA