(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{196:function(e,a,s){"use strict";s.r(a);var t=s(0),n=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"downsample-audio-with-sox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downsample-audio-with-sox","aria-hidden":"true"}},[e._v("#")]),e._v(" Downsample Audio with SoX")]),e._v(" "),s("h2",{attrs:{id:"tools-you-need"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tools-you-need","aria-hidden":"true"}},[e._v("#")]),e._v(" Tools you need")]),e._v(" "),s("p",[e._v("For audio downsampling you need these tools:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ffprobe")]),e._v(" (of the "),s("em",[e._v("FFmpeg")]),e._v(" framework);")]),e._v(" "),s("li",[s("code",[e._v("sox")]),e._v(" ("),s("em",[e._v("SoX")]),e._v(" — Sound eXchange).")])]),e._v(" "),s("p",[e._v("On a Mac install it with Homebrew:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("brew install ffmpeg\nbrew install sox \\\n  --with-flac \\\n  --with-lame \\\n  --with-libao \\\n  --with-libsndfile \\\n  --with-libvorbis \\\n  --with-opencore-amr \\\n  --with-opusfile\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h2",{attrs:{id:"probe-the-original-audio-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#probe-the-original-audio-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Probe the original audio file")]),e._v(" "),s("p",[e._v("To get the sampling rate of the original audio file, use the "),s("code",[e._v("ffprobe")]),e._v("\nutility:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ffprobe -hide_banner original.flac\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Output:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Input #0, flac, from 'original.flac':\n  Duration: 00:41:49.26, start: 0.000000, bitrate: 5019 kb/s\n    Stream #0:0: Audio: flac, 192000 Hz, stereo, s32 (24 bit)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"determine-the-sampling-rate-your-device-supports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#determine-the-sampling-rate-your-device-supports","aria-hidden":"true"}},[e._v("#")]),e._v(" Determine the sampling rate your device supports")]),e._v(" "),s("p",[e._v("First, you have to find out the maximum sampling rate your device supports. For\nexample, the maximum playback sampling rate the iPod Classic (Gen. 6) supports\nis 48 kHz.")]),e._v(" "),s("p",[e._v("The rule of thumb when downsampling is to divide the original sampling rate by\na power of 2. Hence, when downsampling a 192 kHz audio, the target sampling rate\nshould be 96 kHz (2:1 decimation) or 48 kHz (4:1 decimation). When downsampling\na 176 kHz (176.4 kHz, actually) audio, the target sampling rate should be 88.2\nkHz or 44.1 kHz (2:1 and 4:1 decimation, respectively).")]),e._v(" "),s("h2",{attrs:{id:"downsample-with-sox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downsample-with-sox","aria-hidden":"true"}},[e._v("#")]),e._v(" Downsample with SoX")]),e._v(" "),s("p",[e._v("Downsampling with "),s("code",[e._v("sox")]),e._v(" is relatively easy, you just have to use the "),s("em",[e._v("rate\neffect")]),e._v(". You also have to set the phase and the quality. The "),s("a",{attrs:{href:"http://sox.sourceforge.net/Docs/FAQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("SoX\nFAQ"),s("OutboundLink")],1),e._v(" states:")]),e._v(" "),s("blockquote",[s("p",[e._v("Resampling is a series of compromises so there's no one true answer for all\nsituations, but the following rules of thumb should cover most people's needs\nfor 99% of the time:")]),e._v(" "),s("ul",[s("li",[e._v("Phase setting: if resampling to < 40k, use intermediate phase ("),s("code",[e._v("-I")]),e._v(")\notherwise use linear phase ("),s("code",[e._v("-L")]),e._v(", or don't specify; linear phase is the\ndefault).")]),e._v(" "),s("li",[e._v("Quality setting: if resampling (or changing speed, as it amounts to the\nsame thing) at/to > 16 bit depth (i. e. most commonly 24-bit), use VHQ\n("),s("code",[e._v("-v")]),e._v("), otherwise, use HQ ("),s("code",[e._v("-h")]),e._v(", or don't specify).")]),e._v(" "),s("li",[e._v("Bandwidth setting: don't change from the default setting (95%).")]),e._v(" "),s("li",[e._v("If you're mastering to 16-bit, you also need to add "),s("em",[e._v("dither")]),e._v(" (and in most\ncases noise-shaping) after the rate.")])])]),e._v(" "),s("p",[e._v("If you want to downsample a Hi-Res 192 kHz audio to 48 kHz (e. g. for an iPod\nClassic), you should use the "),s("em",[e._v("rate")]),e._v(" effect with linear phase (the default one)\nand the highest quality (VHQ). You can use the "),s("code",[e._v("--guard")]),e._v(" option to\nautomatically invoke the "),s("em",[e._v("gain")]),e._v(" effect to guard against clipping.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sox --show-progress --guard original.flac downsampled.aiff rate -v 48k\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("If you're mastering to 16-bit depth:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sox --show-progress \\\n  --guard original.flac \\\n  -b 16 \\\n  downsampled.aiff \\\n  rate -v 48k \\\n  dither -s\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h3",{attrs:{id:"downsample-multiple-files-in-parallel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downsample-multiple-files-in-parallel","aria-hidden":"true"}},[e._v("#")]),e._v(" Downsample multiple files in parallel")]),e._v(" "),s("p",[e._v("To downsample a bunch of files in parallel you can use the GNU "),s("code",[e._v("parallel")]),e._v("\nutility to run "),s("code",[e._v("sox")]),e._v(". By default "),s("code",[e._v("parallel")]),e._v(" will run as many jobs as\npossible bringing all the CPU cores into play.")]),e._v(" "),s("p",[e._v("On a Mac you can install "),s("code",[e._v("parallel")]),e._v(" with Homebrew:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("brew install parallel\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("For example, let us downsample all the Hi-Res FLAC files in the current\ndirectory and its subdirectories and set the bit depth to 16 bits.")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("find")]),e._v(" to find all the files with names ending in "),s("code",[e._v(".flac")]),e._v(" and pipe the\noutput to "),s("code",[e._v("parallel")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('find . -name "*.flac" -print0 \\\n  | parallel -0 --tmux --eta \\\n      "mkdir -p {//}/sox-out ; \\\n       mkdir -p {//}/sox-out/logs ; \\\n       sox --show-progress \\\n         --guard {} \\\n         -b 16 \\\n         -t flac \\\n         -C 0 \\\n         {//}/sox-out/{/.}.flac \\\n         rate -v 48k \\\n         dither -s \\\n         2>&1 \\\n           | tee {//}/sox-out/logs/{/.}.sox.log"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("Use the "),s("code",[e._v("parallel")]),e._v(" option "),s("code",[e._v("--tmux")]),e._v(" to be able to view all the jobs in a "),s("code",[e._v("tmux")]),e._v("\nsession in real time. Use the option "),s("code",[e._v("--eta")]),e._v(" to see the progress information.")]),e._v(" "),s("p",[e._v("After the downsampling is finished, you can inspect the logs for errors and\nwarnings.")]),e._v(" "),s("p",[e._v("You can use "),s("code",[e._v("grep")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('grep -r --include "*.log" -i "err \\| warn" .\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("br"),e._v(" "),s("ClientOnly",[s("Disqus",{attrs:{shortname:"notes-maxie-xyz",language:"en"}})],1),e._v(" "),s("br"),e._v(" "),s("div",{staticStyle:{"text-align":"center","font-size":"x-small"}},[e._v("\n    Allow loading scripts from disqus.com to see the comments.\n")])],1)},[],!1,null,null,null);a.default=n.exports}}]);