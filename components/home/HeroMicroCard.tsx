export default function(props:any){

    const truncate = (text: string, limit: number) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
      };
  
      
  return (
    <div>
        
      <a
        href="#"
        className="flex flex-col items-center bg-white md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5"
      >
        <div className="bg-gray-300 rounded-full text-2xl px-6 py-4 ml-2">{props.number}</div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {truncate(props.title,50)}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {truncate(props.description, 100)}
          </p>
        </div>
      </a>
    </div>
  );
}
