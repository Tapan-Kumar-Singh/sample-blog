export default function HeroMiniCard(props:any) {

  const truncate = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  

  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex mb-5">
        <div
          className="h-48 lg:h-auto lg:w-40 flex-none bg-cover text-center overflow-hidden"
          // style={{
          //   backgroundImage: `url(${props.imageUrl})`,
          // }}
          title="Woman holding a mug"
        >
          <div className="flex rounded-lg h-40 justify-center items-center mt-3">
            <img src={props.imageUrl} className="w-full h-auto rounded-lg" />
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 font-bold text-base">
              {truncate(props.title, 70)}
            </div>
            
          </div>
          <div className="flex items-center -mt-5">
            <div className="text-sm">
              <p className="text-gray-700 leading-none font-bold">{props.author}</p>
              <p className="text-gray-600">{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
