import React, { useMemo, useState } from "react";
import PageContainer from "../../Layouts/PageContainer";
import { postList } from "../../configs/post.config";
import { userList } from "../../configs/user.config";
import { oshiList } from "../../configs/oshi.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PerfectScrollbar from "react-perfect-scrollbar";
import PostCard from "../../features/Post/PostCard";

export default function TimelinePage() {
  const [posts, setPosts] = useState(postList);
  const aggregatedPosts = useMemo(
    () =>
      posts.map((post) => ({
        ...post,
        user: userList.find((u) => u.id === post.userId),
        oshi: post.oshiId.map((oId) => oshiList.find((o) => o.id === oId)),
      })),
    [postList]
  );

  return (
    <PerfectScrollbar style={{ maxHeight: "calc(100vh - 80px)" }}>
      <PageContainer>
        {aggregatedPosts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </PageContainer>
    </PerfectScrollbar>
  );
}
