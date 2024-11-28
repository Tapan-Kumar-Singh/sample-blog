export default function HeroBaseCard(props: any) {

  
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden">
        <img
          className="w-full"
          src={props.imageUrl}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-base mb-2">{props.author}</div>
          <p className="text-gray-700 text-base">Published At: {props.date}</p>
        </div>
        <div className="px-6 pt-4 pb-2 text-center">
          <button className="text-cyan-600 font-semibold border border-cyan-600 border-2 py-2 px-4 rounded w-2/3 m-auto">
            All Featured Post
          </button>
        </div>
      </div>
    </div>
  );
}
