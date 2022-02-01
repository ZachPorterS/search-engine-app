/* Used to create individual options on header option bar */
function HeaderOption({Icon, title, selected}) {
    return (
        <div className={`flex items-center space-x-1 border-b-4 
        border-transparent hover:text-blue-400 cursor-pointer
        hover:border-blue-400 pb-2 ${selected && 'text-blue-400 border-blue-400'}`}>
            <Icon className='h-4'/>
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    );
}

export default HeaderOption;