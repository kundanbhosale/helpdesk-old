import { useLayoutEffect, useMemo, useRef, useState } from "react"
import Accordion from "@yoopta/accordion"
import ActionMenuList, {
  DefaultActionMenuRender,
} from "@yoopta/action-menu-list"
import Blockquote from "@yoopta/blockquote"
import Callout from "@yoopta/callout"
import Code from "@yoopta/code"
import Divider from "@yoopta/divider"
import YooptaEditor, {
  createYooptaEditor,
  // Elements,
  // Blocks,
  // useYooptaEditor,
  YooptaContentValue,
  YooptaOnChangeOptions,
} from "@yoopta/editor"
import Embed from "@yoopta/embed"
import { markdown } from "@yoopta/exports"
import File from "@yoopta/file"
import { HeadingOne, HeadingThree, HeadingTwo } from "@yoopta/headings"
import Image from "@yoopta/image"
import Link from "@yoopta/link"
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool"
import { BulletedList, NumberedList, TodoList } from "@yoopta/lists"
import {
  Bold,
  CodeMark,
  Highlight,
  Italic,
  Strike,
  Underline,
} from "@yoopta/marks"
import Paragraph from "@yoopta/paragraph"
import Table from "@yoopta/table"
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar"
import Video from "@yoopta/video"

//   import { WITH_BASIC_INIT_VALUE } from './initValue';

const plugins = [
  Paragraph,
  Table,
  Divider.extend({
    elementProps: {
      divider: (props) => ({
        ...props,
        color: "#007aff",
      }),
    },
  }),
  Accordion,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Blockquote,
  Callout,
  NumberedList,
  BulletedList,
  TodoList,
  Code,
  Link,
  Embed,
  Image.extend({
    options: {
      async onUpload(file) {
        //   const data = await uploadToCloudinary(file, 'image');

        //   return {
        //     src: data.secure_url,
        //     alt: 'cloudinary',
        //     sizes: {
        //       width: data.width,
        //       height: data.height,
        //     },
        //   };

        return {}
      },
    },
  }),
  Video.extend({
    options: {
      onUpload: async (file) => {
        //   const data = await uploadToCloudinary(file, 'video');
        //   return {
        //     src: data.secure_url,
        //     alt: 'cloudinary',
        //     sizes: {
        //       width: data.width,
        //       height: data.height,
        //     },
        //   };
        return {}
      },
      onUploadPoster: async (file) => {
        //   const image = await uploadToCloudinary(file, 'image');
        //   return image.secure_url;
        return ""
      },
    },
  }),
  File.extend({
    options: {
      onUpload: async (file) => {
        //   const response = await uploadToCloudinary(file, 'auto');
        //   return { src: response.secure_url, format: response.format, name: response.name, size: response.bytes };
        return {}
      },
    },
  }),
]

const TOOLS = {
  ActionMenu: {
    render: DefaultActionMenuRender,
    tool: ActionMenuList,
  },
  Toolbar: {
    render: DefaultToolbarRender,
    tool: Toolbar,
  },
  LinkTool: {
    render: DefaultLinkToolRender,
    tool: LinkTool,
  },
}

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight]

function NotesEditor({ initial }: { initial: string }) {
  const [value, setValue] = useState<YooptaContentValue>({})
  const editor = useMemo(() => createYooptaEditor(), [])
  const selectionRef = useRef<HTMLDivElement>(null)

  const onChange = (
    newValue: YooptaContentValue,
    options: YooptaOnChangeOptions
  ) => {
    setValue(newValue)
  }

  // const handleClick = () => {
  //   editor.focus()
  // }

  const deserializeMarkdown = (initial: string) => {
    const markdownString = initial || dummyData()
    const value = markdown.deserialize(editor, markdownString)

    editor.setEditorValue(value)
  }

  useLayoutEffect(() => {
    deserializeMarkdown(initial)
  }, [initial])

  return (
    <div
      className="flex justify-center w-full rounded-md"
      ref={selectionRef}
      // onClick={handleClick}
    >
      <YooptaEditor
        editor={editor}
        plugins={plugins}
        tools={TOOLS}
        marks={MARKS}
        selectionBoxRoot={selectionRef}
        value={value}
        onChange={onChange}
        autoFocus
        width={"100%"}
        className="px-14 py-4"
      />
    </div>
  )
}

export default NotesEditor

function dummyData() {
  return `
 # Milkdown

👋 Welcome to Milkdown. We are so glad to see you here!

💭 You may wonder, what is Milkdown? Please write something here.

> ⚠️ **Not the right side!**
>
> Please try something on the left side.

![1.00](/polar.jpeg "Hello by a polar bear")

You're seeing this editor called **🥞Crepe**, which is an editor built on top of Milkdown.

If you want to install this editor, you can run \`npm install @milkdown/crepe\`. Then you can use it like this:

\`\`\`JavaScript
import { Crepe } from '@milkdown/crepe';
import "@milkdown/crepe/theme/common/style.css";

// We have some themes for you to choose, ex.
import "@milkdown/crepe/theme/frame.css";
// Or you can create your own theme
import "./your-theme.css";

const crepe = new Crepe({
  root: '#app',
  defaultValue: '# Hello, Milkdown!',
})

crepe
  .create()
  .then(() => {
    console.log('Milkdown is ready!');
  })


// Before unmount
crepe.destroy();
\`\`\`

***

## Structure

> 🍼 [Milkdown](https://github.com/Milkdown/milkdown) is a WYSIWYG markdown editor framework.
>
> Which means you can build your own markdown editor with Milkdown.

In the real world, a typical milkdown editor is built on top of 3 layers:

* [x] 🥛 Core: The core of Milkdown, which provides the plugin loading system with the editor concepts.
* [x] 🧇 Plugins: A set of plugins that can be used to extend the functionalities of the editor.
* [x] 🍮 Components: Some headless components that can be used to build your own editor.

At the start, you may find it hard to understand all these concepts.
But don't worry, we have this \`@milkdown/crepe\` editor for you to get started quickly.

***

## You can do more with Milkdown

In Milkdown, you can extend the editor in many ways:

| Feature      | Description                                          | Example                   |
| ------------ | ---------------------------------------------------- | ------------------------- |
| 🎨 Theme     | Create your own theme with CSS                       | Nord, Dracula             |
| 🧩 Plugin    | Create your own plugin to extend the editor          | Search, Collab            |
| 📦 Component | Create your own component to build your own editor   | Slash Menu, Toolbar       |
| 📚 Syntax    | Create your own syntax to extend the markdown parser | Image with Caption, LaTex |

We have provided a lot of plugins and components, with an out-of-the-box crepe editor for you to use and learn.

***

## Open Source

* Milkdown is an open-source project under the MIT license.
* Everyone is welcome to contribute to the project, and you can use it in your own project for free.
* Please let me know what you are building with Milkdown, I would be so glad to see that!

Maintaining Milkdown is a lot of work, and we are working on it in our spare time.
If you like Milkdown, please consider supporting us by [sponsoring](https://github.com/sponsors/Saul-Mirone) the project.
We'll be so grateful for your support.

## Who built Milkdown?

Milkdown is built by [Mirone](https://github.com/Saul-Mirone) and designed by [Meo](https://meo.cool).
 `
}
