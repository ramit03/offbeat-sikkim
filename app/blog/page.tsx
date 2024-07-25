import { client, urlFor } from "@/lib/sanity";
import { blogCard } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == 'blog' ] | order(_createdAt desc) {
  title,caption,titleImage,
    "currentSlug":slug.current,_createdAt
}`;
  const data = await client.fetch(query);
  console.log(data);
  return data;
}

const chunkPosts = (posts: blogCard[], size: number): blogCard[][] => {
  const chunks: blogCard[][] = [];
  for (let i = 0; i < posts.length; i += size) {
    chunks.push(posts.slice(i, i + size));
  }
  console.log("Chunked posts:", chunks);
  return chunks;
};

function formatDate(dateString: string) {
  const dateParts = dateString.split("-");
  return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
}

async function blog() {
  const data: blogCard[] = await getData();
  const groupPosts = chunkPosts(data, 3);

  if (data.length === 0) {
    return(
      <section className="w-full items-center flex flex-1 py-52 lg:py-64 justify-center">
      <h1 className="displayl text-primary">Coming Soon!</h1>
    </section>
    )
  }

  return (
    <main className="px-4 md:px-6 bg-[#F6FBF4] max-w-screen-2xl mx-auto">
      {data.length !=0  && (
        <>
          <section className="flex flex-col gap-4">
            <h1 className="text-secondary-oncontainer  headlines md:displays lg:displaym">
              Offbeat Sikkim Blog
            </h1>
            <p className="text-black  bodym md:bodyl">
              Check out Offbeat Sikkim&apos;s Blog for tips, stories and expert
              advice on himalayan adventures
            </p>
          </section>
          <section className="hidden md:flex flex-wrap">
            {groupPosts.map((group, idx) => (
              <div
                key={idx}
                className="w-full p-8 space-y-4 md:space-y-0 md:flex gap-4"
              >
                <div
                  className={cn(
                    `w-full rounded-lg lg:rounded-[10px] bg-[#F8FCFA] shadow-cardShadow`,
                    `${group.length === 1 ? "pb-4" : "md:w-1/2 pb-4"}`
                  )}
                >
                  <Link href={`/blog/${group[0].currentSlug}`}>
                    {group[0] && (
                      <div className="h-full w-full">
                        <div className="w-full h-[600px]  relative">
                          <Image
                            src={urlFor(group[0].titleImage).url()}
                            fill
                            alt={group[0].title}
                            className="rounded-lg object-cover lg:rounded-[10px]"
                          />
                        </div>
                        <div className="px-4 pt-4 space-y-1 text-[#051E13]">
                          <p className="labels text-[#404942]">
                            {formatDate(
                              new Date(group[0]._createdAt)
                                .toISOString()
                                .split("T")[0]
                            )}
                          </p>
                          <h2 className="titles line-clamp-2 md:titlel font-bold">
                            {group[0].title}
                          </h2>
                          <p className="labell line-clamp-2 overflow-ellipsis select-none">
                            {group[0].caption}
                          </p>
                        </div>
                      </div>
                    )}
                  </Link>
                </div>

                <div
                  className={cn(
                    "w-full md:h-auto md:w-1/2 flex gap-4 flex-col",
                    `${group.length > 1 ? "w-full md:w-1/2" : "hidden"}`
                  )}
                >
                  {group.slice(1).map((post, index) => (
                    <Link key={index} href={`/blog/${post.currentSlug}`}>
                      <div  
                        className="flex-1 pb-4 rounded-lg lg:rounded-[10px] bg-[#F8FCFA] shadow-cardShadow"
                      >
                        <div className={cn("w-full  relative",`${group.length ===2 ?'h-[600px]':'h-[240px]' }`)}>
                          <Image
                            src={urlFor(post.titleImage).url()}
                            fill
                            alt={post.title}
                            className="rounded-lg object-cover lg:rounded-[10px]"
                          />
                        </div>
                        <div className="px-4 pt-4 space-y-1 text-[#051E13]">
                          <p className="labels text-[#404942]">
                            {formatDate(
                              new Date(group[0]._createdAt)
                                .toISOString()
                                .split("T")[0]
                            )}
                          </p>
                          <h2 className="titles line-clamp-2 md:titlel font-bold">
                            {post.title}
                          </h2>
                          <p className="labell line-clamp-2 overflow-ellipsis select-none">
                            {post.caption}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Small screens */}
          <section className="flex flex-col gap-6 p-8 md:hidden">
            {data.map((post, index) => (
              <Link  key={index} href={`/blog/${post.currentSlug}`}>
                <div
                 
                  className="flex-1 pb-4 rounded-lg lg:rounded-[10px] bg-[#F8FCFA] shadow-cardShadow"
                >
                  <div className="w-full h-[240px] relative">
                    <Image
                      src={urlFor(post.titleImage).url()}
                      fill
                      alt={post.title}
                      className="rounded-lg object-cover lg:rounded-[10px]"
                    />
                  </div>
                  <div className="px-4 pt-4 space-y-1 text-[#051E13]">
                    <p className="labels text-[#404942]">
                      {formatDate(
                        new Date(post._createdAt).toISOString().split("T")[0]
                      )}
                    </p>
                    <h2 className="titles line-clamp-2 md:titlel font-bold">
                      {post.title}
                    </h2>
                    <p className="labell line-clamp-2 overflow-ellipsis select-none">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </>
      )}
    </main>
  );
}

export default blog;
