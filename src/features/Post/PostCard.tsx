import React, { useMemo, useState } from "react";
import { IPost } from "../../interfaces/post.interface";
import { userList } from "../../configs/user.config";
import { oshiList } from "../../configs/oshi.config";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProps {
  post: IPost;
}

export default function PostCard({ post }: IProps) {
  const [liked, setLiked] = useState(false);

  const aggregatedPost = useMemo(() => {
    return {
      ...post,
      user: userList.find((u) => u.id === post.userId),
      oshi: post.oshiId.map((oId) => oshiList.find((o) => o.id === oId)),
    };
  }, [post]);

  return (
    <div className="border rounded mb-3">
      <div className="d-flex align-items-center p-3" style={{ gap: 10 }}>
        <img
          src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
          alt=""
          className="rounded-circle border"
          style={{ height: 30, width: 30 }}
        />
        <div
          className="d-flex align-items-center"
          style={{ gap: 5, flexWrap: "wrap" }}
        >
          <div className="fw-semibold">{aggregatedPost.user?.name}</div>
          {!!aggregatedPost.oshi.length && (
            <>
              <div className="text-muted" style={{ fontSize: ".8rem" }}>
                with
              </div>
              <div
                className="fw-semibold text-muted"
                style={{ fontSize: ".8rem" }}
              >
                {aggregatedPost.oshi.map((o) => o?.name).join(", ")}
              </div>
            </>
          )}
        </div>
      </div>
      {!!aggregatedPost.images.length && (
        <div className="border-top border-bottom">
          <Swiper modules={[Navigation, Pagination]}>
            {aggregatedPost.images.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image}
                  alt=""
                  style={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {!!aggregatedPost.caption && (
        <div className="p-3">{aggregatedPost.caption}</div>
      )}
      <div
        className="d-flex align-items-center justify-content-end text-muted p-3"
        style={{ gap: 25, fontSize: "1.3rem" }}
      >
        <div style={{ cursor: "pointer" }} onClick={() => setLiked((s) => !s)}>
          {liked ? (
            <i className="fa fa-heart text-danger"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </div>
        <div style={{ cursor: "pointer" }}>
          <i className="far fa-comment"></i>
        </div>
        <div style={{ cursor: "pointer" }}>
          <i className="far fa-share-from-square"></i>
        </div>
      </div>
    </div>
  );
}
