const posts = [
  {
    id: 1,
    title: 'Outdoor activities',
    href: '#',
    description:
      'This is a list that includes some nearby outdoor areas that you should explore!',
    date: '',
    datetime: '',
    category: { title: 'Outdoor', href: '#' },
    author: {}, // if I remove this, it gets angry
    image:  './assets/Cadron.jpeg',
  },

  {
    id: 2,
    title: 'Recreation Leagues',
    href: '#',
    description:
      'Heres a list of organizations you can join!',
    date: '',
    datetime: '',
    category: { title: 'Group Activites', href: '#' },
    author: {}, 
    image:  './assets/rec.jpeg',
  },
  {
    id: 3,
    title: 'Miscelaneous',
    href: '#',
    description:
      'Additional activites',
    date: '',
    datetime: '',
    category: { title: 'Miscelaneous', href: '#' },
    author: {}, 
    image:  './assets/downtown.jpeg',
  },
  
  // More posts...
]

export default function Entertainment() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Entertainment</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stuck on what you should do? Here are some fun activies you can do in Conway!.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div>
                <img src={post.image} alt="" className="h-100 w-100 rounded bg-gray-50" style={{height:250, width:400}} />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">

                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
