import React, { useState } from "react";
import { SubmitPost } from "../SubmitPost/SubmitPost";
import { PostNotifIcon } from "../../PostNotifIcon/PostNotifIcon";
import { PostOptions } from "../PostOptions/PostOptions";
import { PostTextInput } from "../PostTextInput/PostTextInput";
import { Dropbox } from "../Dropbox/Dropbox";
import { PostHeader } from "../../PostHeader/PostHeader";
import { PostLength } from "../PostLength/PostLength";
import { PostHeadInput } from "../PostHeadInput/PostHeadInput";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";
const settings = require("../../../../public/settings.png");
import styles from "./styles.module.scss";

interface Redux {
  userId: string;
  username: string;
  setToFeed: (
    title: string,
    text: string,
    username: string,
    timestamp: number
  ) => void;
}

const PostRenderPre: React.FC<Redux> = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  const [posted, setPosted] = useState(false);
  const [allowComments, setAllowComments] = useState(true);
  const [allowLikes, setAllowLikes] = useState(true);
  const [optionHeight, setOptionHeight] = useState("0");
  const [maxHeightOptions, setMaxHeightOptions] = useState(false);
  const [valueOpacity, setValueOpacity] = useState(0);

  const [image, setImage] = useState();

  function successfulEvent() {
    setTitle("");
    setText("");
    setSuccess(true);
    setPosted(true);
    setValueOpacity(0);
  }

  function unsuccessfulEvent() {
    setSuccess(false);
    setPosted(true);
  }

  function timeoutFunc() {
    setPosted(false);
    setSuccess(false);
  }

  function modAllowComments() {
    setAllowComments(!allowComments);
  }

  function modAllowLikes() {
    setAllowLikes(!allowLikes);
  }

  function returnPass() {
    if (posted === true) {
      return <PostNotifIcon timeoutFunc={timeoutFunc} success={success} />;
    } else return null;
  }

  function modifyImg(imgData: any) {
    setImage(imgData);
  }

  function modSettingsHeight() {
    if (maxHeightOptions === true) {
      setOptionHeight("0");
      setMaxHeightOptions(false);
    } else {
      setOptionHeight("25px");
      setMaxHeightOptions(true);
    }
  }

  function updateText(input: string) {
    if (input.length > 0 || title.length > 0) setValueOpacity(1);
    else setValueOpacity(0);
    setText(input);
  }

  function modTitle(input: string) {
    setTitle(input);
  }

  return (
    <div id="post" className={styles.post_container}>
      <PostHeader />

      <PostHeadInput
        title={title}
        text={text}
        valueOpacity={valueOpacity}
        modTitle={modTitle}
      />
      <PostTextInput text={text} updateText={updateText} />
      <div
        style={{ opacity: valueOpacity }}
        className={styles.image_block}
        onClick={() => modSettingsHeight()}
      >
        <img className={styles.image} src={settings} />
      </div>
      <Dropbox modifyImg={modifyImg} valueOpacity={valueOpacity} />
      <SubmitPost
        username={props.username}
        title={title}
        text={text}
        buttonTitle="Post"
        successfulEvent={successfulEvent}
        unsuccessfulEvent={unsuccessfulEvent}
        allowComments={allowComments}
        allowLikes={allowLikes}
        accompaniedURL=""
        image={image}
        valueOpacity={valueOpacity}
      />
      <PostLength text={text} />
      <PostOptions
        allowComments={allowComments}
        allowLikes={allowLikes}
        optionHeight={optionHeight}
        modAllowComments={modAllowComments}
        modAllowLikes={modAllowLikes}
        valueOpacity={valueOpacity}
      />
      {returnPass()}
    </div>
  );
};

export const PostRender = connect(mapStateToProps)(PostRenderPre);
