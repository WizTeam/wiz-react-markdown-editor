import { useEffect, useState } from 'react';
import Muya from '../muya/lib';
import TablePicker from '../muya/lib/ui/tablePicker';
import QuickInsert from '../muya/lib/ui/quickInsert';
import CodePicker from '../muya/lib/ui/codePicker';
import EmojiPicker from '../muya/lib/ui/emojiPicker';
import ImagePathPicker from '../muya/lib/ui/imagePicker';
import ImageSelector from '../muya/lib/ui/imageSelector';

Muya.use(TablePicker);
Muya.use(QuickInsert);
Muya.use(CodePicker);
Muya.use(EmojiPicker);
Muya.use(ImageSelector, {
  unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY
});
Muya.use(ImagePathPicker);

function formatOptions(options) {
  Object.assign(
    options,
    /dark/i.test(options.theme)
      ? {
          mermaidTheme: 'dark',
          vegaTheme: 'dark'
        }
      : {
          mermaidTheme: 'default',
          vegaTheme: 'latimes'
        }
  );
  return options;
}

export function useMuya(eleRef, options) {
  const [editor, setEditor] = useState();
  useEffect(() => {
    if (eleRef.current) {
      const muya = new Muya(eleRef.current, formatOptions(options));
      setEditor({
        ...muya,
        setOptions: (opt) => muya.setOptions(formatOptions(opt))
      });
    }
  }, [eleRef]);

  return editor;
}
