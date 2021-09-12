function Pagination({articlesCount,currentPage, setCurrentPage}){
    let totalPages=Math.ceil(articlesCount/8)
    let count=[]
    for(let i=1;i<totalPages;i++){
        count[i-1]=i
    }
    function handleCurrentPage(elm){
        setCurrentPage(elm)
    }
    function handlePrev(){
        setCurrentPage(currentPage>1?currentPage-1:1)
    }
    function handleNext(){
        setCurrentPage(currentPage<totalPages?currentPage+1:totalPages)
    }
    let exp = [1,2,3,4,5,'...',totalPages]
    if(currentPage>3&&currentPage<totalPages-2){
        exp[1]='...'
        exp[2]=currentPage-1
        exp[3]=currentPage
        exp[4]=currentPage+1
    }
    if(currentPage>=totalPages-2){
        exp[5]=totalPages-1
        exp[4]=totalPages-2
        exp[3]=totalPages-3
        exp[2]=totalPages-4
        exp[1]='...'
    }

    return(
        <div className='pagination flex'>
            <h3 onClick={handlePrev}>Prev</h3>
            {
                exp.map((elm)=>(
                    <h3 key={elm} className={elm===currentPage&&'active-page'}  onClick={()=>handleCurrentPage(elm)}>{elm}</h3>)
            )
            }
            <h3 onClick={handleNext}>Next</h3>
        </div>
    ) 
}

export default Pagination
