import { useEffect, useState } from 'react';
import Muya from '../muya/lib';
import TablePicker from '../muya/lib/ui/tablePicker';
import QuickInsert from '../muya/lib/ui/quickInsert';
import CodePicker from '../muya/lib/ui/codePicker';
import EmojiPicker from '../muya/lib/ui/emojiPicker';
import ImagePathPicker from '../muya/lib/ui/imagePicker';
import ImageSelector from '../muya/lib/ui/imageSelector';
import ImageToolbar from '../muya/lib/ui/imageToolbar';
import Transformer from '../muya/lib/ui/transformer';
import FormatPicker from '../muya/lib/ui/formatPicker';
import LinkTools from '../muya/lib/ui/linkTools';
import FootnoteTool from '../muya/lib/ui/footnoteTool';
import TableBarTools from '../muya/lib/ui/tableTools';
import FrontMenu from '../muya/lib/ui/frontMenu';

Muya.use(TablePicker);
Muya.use(QuickInsert);
Muya.use(CodePicker);
Muya.use(EmojiPicker);
Muya.use(ImageSelector, {
  unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY
});
Muya.use(ImagePathPicker);
Muya.use(ImageToolbar);
Muya.use(Transformer);
Muya.use(FormatPicker);
Muya.use(LinkTools, {
  jumpClick: (obj) => {
    if (obj.token.type === 'link') {
      try {
        window.open(obj.href);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
Muya.use(FootnoteTool);
Muya.use(TableBarTools);
Muya.use(FrontMenu);

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
      // eslint-disable-next-line func-names
      Muya.prototype.setOptionsWithTheme = function (opt) {
        return this.setOptions(formatOptions(opt));
      };
      //
      setEditor(muya);
    }

    return () => {
      if (editor) {
        editor.destroy();
        setEditor(null);
      }
    };
  }, [eleRef]);

  return editor;
}
