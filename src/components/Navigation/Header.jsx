const Header = () => {
  return (
    
        <header className="flex justify-between border-[#000000] border-[1px] border-solid py-3 px-7 text-center items-center shadow-md mt-2">
            {/* 
            color: #000;

text-align: center;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 18px;  128.571% 
// letter-spacing: -0.28px;
 */}
            <h1 className="text-center text-sm leading-[18px] font-bold tracking-[-0.28px]">VSell</h1>


            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.10381V2.20762C0 2.81724 0.587626 3.31143 1.3125 3.31143H12.6875C13.4124 3.31143 14 2.81724 14 2.20762V1.10381C14 0.494193 13.4124 0 12.6875 0H1.3125C0.587626 0 0 0.494193 0 1.10381ZM0 8.2076V7.10377C0 6.49414 0.752162 5.99994 1.68 5.99994H12.32C13.2478 5.99994 14 6.49414 14 7.10377V8.2076C14 8.81723 13.2478 9.31143 12.32 9.31143H1.68C0.752162 9.31143 0 8.81723 0 8.2076ZM0 14.2076V13.1038C0 12.4942 1.04467 12 2.33333 12H11.6667C12.9553 12 14 12.4942 14 13.1038V14.2076C14 14.8172 12.9553 15.3114 11.6667 15.3114H2.33333C1.04467 15.3114 0 14.8172 0 14.2076Z" fill="black"/>
</svg>

        </header>
    
  )
}

export default Header