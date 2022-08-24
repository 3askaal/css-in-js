import React from 'react'
import { s } from '../../../utils'

interface BoxProps {
  db: any;
  dib: any;
  w: any;
  h: any;
  mw: any;
  mh: any;
  ovh: any;
  df: any;
  dif: any;
  fdr: any;
  fdc: any;
  ai: any;
  aic: any;
  aifs: any;
  aife: any;
  jcsb: any;
  jcsa: any;
  jcfs: any;
  jcfe: any;
  asc: any;
  asfs: any;
  asfe: any;
  jsc: any;
  jsfs: any;
  jsfe: any;
  fg: any;
  fs: any;
  fb: any;
  o: any;
}

export const SBox: any = s.div()

// eslint-disable-next-line
const getStyling = ({
  db,
  dib,
  w,
  h,
  mw,
  mh,
  ovh,
  df,
  dif,
  fdr,
  fdc,
  ai,
  aic,
  aifs,
  aife,
  jcsb,
  jcsa,
  jcfs,
  jcfe,
  asc,
  asfs,
  asfe,
  jsc,
  jsfs,
  jsfe,
  fg,
  fs,
  fb,
  o,
}: BoxProps) => {
  return {
    ...(db && { display: 'block'}),
    ...(dib && { display: 'inline-block'}),
    ...(w && { width: w }),
    ...(h && { height: h }),
    ...(mw && { maxWidth: mw }),
    ...(mh && { maxHeight: mh }),
    ...(ovh && { overflow: 'hidden' }),
    ...(df && { display: 'flex'}),
    ...(dif && { display: 'inline-flex'}),
    ...(fdr && { flexDirecton: 'row' }),
    ...(fdc && { flexDirecton: 'column' }),
    ...(ai && { alignItems: ai }),
    ...(aic && { alignItems: 'center'}),
    ...(aifs && { alignItems: 'flex-start' }),
    ...(aife && { alignItems: 'flex-end' }),
    ...(jcsb && { justifyContent: 'space-between'}),
    ...(jcsa && { justifyContent: 'space-around'}),
    ...(jcfs && { justifyContent: 'flex-start' }),
    ...(jcfe && { justifyContent: 'flex-end' }),
    ...(asc && { alignSelf: 'center'}),
    ...(asfs && { alignSelf: 'flex-start'}),
    ...(asfe && { alignSelf: 'flex-end'}),
    ...(jsc && { justifySelf: 'center'}),
    ...(jsfs && { justifySelf: 'flex-start'}),
    ...(jsfe && { justifySelf: 'flex-end'}),
    ...(fg && { flexGrow: fg }),
    ...(fs && { flexShrink: fs }),
    ...(fb && { flexBasis: fb }),
    ...(o && { order: o }),
  }
}

// { s: styling, ...props }
export const Box = ({ ...props }: any) => {
  // const mergedStyling = {
  //   ...styling,
  //   ...getStyling(props),
  // }

  return <SBox sRef="Box" {...props} />
}

Box.displayName = 'Box'
