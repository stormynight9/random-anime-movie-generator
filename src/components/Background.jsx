const Background = (props) => {
    return (
        <div className={`gradient h-auto w-auto blur-sm absolute bg-cover bg-center top-0 left-0 right-0 bottom-0 -z-10 ${props.color ? `bg-[${props.color}]` : 'bg-black'}`} style={{ backgroundImage: `url(${props?.bannerImage || 'https://cutewallpaper.org/25/anime-landscape-wallpaper-art/100465192.jpg'})` }}
        />
    )
}

export default Background