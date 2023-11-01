<template>
<section class='container'>
<HeaderBar/>
<!-- Initial State 1 -->
<div class='storyHeader'>
    <img v-if='previous === undefined' src="@/assets/home/chapter_1_title.png">
    <span v-if='previous !== undefined'>{{previous}}</span>
</div>
<section v-if='progress == 1' class='storyBox' style="height: 400px;">
    <div class='textarea'>
        <div class='paragraph'>
            <p>
            똑같은 하루가 끝이 나고 세상에 밤이 내려앉은 시간, 여느때와 같이 잠자리에 든 당신. 온몸을 포근하게 감싸안은 그림자 속에 잠겨 당신의 무의식은 서서히 꿈의 세계로 들어갑니다. 팔다리가 붕 뜨는 느낌과 함께 머릿속이 한없이 가벼워지는 순간. 당신은 익숙한 장소에서 눈을 뜹니다.
            </p>
        </div>
        <div class='illustration'>
            <img src='@/assets/ep_illust1.png' alt='illustration'>
            <p class='caption'>생생한 장면이 꿈에서 펼쳐졌습니다.<br/>당신은 이 장면을 기억할 것입니다. +정신력 1</p>
        </div>
        <div class='paragraph'>
            <p>
            작은 한칸 방, 연분홍빛 벽과 바닥의 경계가 모호하게 이루어진 이 공간... 알록달록한 파스텔 톤의 책상과 의자, 컴퓨터... 이 곳은 당신이 일하는 사무실입니다. 매일 똑같은 업무를 기계적으로 처리하던 이곳은 당신이 평소 알던 무채색의 사무실과 형태는 비슷하나 사뭇 다릅니다. 누군가 물감을 끼얹은 캔버스 마냥 몽환적인 색으로 온통 얼룩이 져있고 왜인지 보라색의 향이 나는 듯 합니다. 향이 보라색이라니? 믿을 수 없는 이야기이지만 당신은 분명히 그렇게 느끼고 있습니다.
            </p>
        </div>
        <div class='paragraph'>
            <p>
            이 장소는 당신에게 아주 익숙합니다. 그렇죠? 단순히 당신이 매일 일하는 사무실이기 때문이 아닙니다. 그보다는 좀 더 기묘한 이유입니다... 당신의 꿈이 최근 며칠동안 계속 이 장소에서 시작하고 있기 때문이죠. 처음에는 우연의 일치로 치부했던 당신도 이제는 부정할 수 없을겁니다. 당신은 반복되는 꿈을 꾸고 있어요. 하지만 어째서일까요?
            </p>
        </div>
    </div>
    <div v-if='progress == 1' class='options'>
        <ul>
            <li @click='proceed1'>&#12297; 그걸 내가 어떻게 알아?</li>
        </ul>
    </div>
</section>
<!-- Initial State 2 -->
<section v-if='progress == 2' class='storyBox'>
    <div class='textarea'>
        <div class='paragraph'>
            <p>
            맞습니다. 알길이 없죠... 아직까지는 말이에요. 하지만 이 꿈의 주인은 당신이니 누군가 그 질문에 답을 할 수 있다면 그것은 분명 당신일겁니다. 어쨋든 지금의 당신은 이 장소에 대해, 이 꿈에 대해 아는 것이 없습니다. 오늘도 이 알록달록한 사무실에 멍하니 앉아있다가 꿈이 끝나는 걸까요? 당신은 여느때와 같이 의자에 앉아 파스텔 톤의 사무실을 둘러봅니다.
            </p>
        </div>
    </div>
    <div v-if='progress == 2' class='options'>
        <ul>
            <li @click='option3'>&#12297; 의자에서 일어난다.</li>
            <li @click='option2'>&#12297; 컴퓨터를 조작한다.</li>
            <li @click='option1'>&#12297; 그저 멍 때린다.</li>
        </ul>
    </div>
</section>
<!-- Chose option 1 for the first time -->
<section v-if='progress == 3' class='storyBox'>
    <div class='textarea'>
        <div class='paragraph'>
            <p>
            당신은 넋을 놓고 멍 때리기 시작합니다. 원래도 힘없이 널부러져있던 팔다리가 더 축 처지고 당신의 몸이 분홍색 의자와 완전히 합쳐지는 기분입니다... 이대로 아무것도 안하는 것이 정답일까요?
            </p>
        </div>
    </div>
    <div v-if='progress == 3' class='options'>
        <ul>
            <li @click='option3'>&#12297; 의자에서 일어난다.</li>
            <li @click='option2'>&#12297; 컴퓨터를 조작한다.</li>
            <li @click='option4'>&#12297; 계속 멍 때린다.</li>
        </ul>
    </div>
</section>

<!-- Chose option 1 for the second time -->
<section v-if='progress == 4' class='storyBox'>
    <div class='textarea'>
        <div class='paragraph'>
            <p>
            당신은 아무것도 하지 않기로 합니다. 뭐가 달라질게 있을까요? 어차피 이렇게 멍 때리고 있다보면 꿈은 알아서 끝이나고... 아침이 찾아오겠죠. 그러면 당신은 또 다시 이 사무실로 출근을 하게 됩니다. 다만 현실 속 사무실은 이렇게 알록달록하지 않지만 말이죠. 의자에 앉아 멍 때리며 깜박이는 컴퓨터 화면을 들여다 보고 있다는 것은 똑같을 겁니다. 정말 꿈 속에서 현실과 다를 바 없이 넋 놓고 시간이 지나가는 것을 기다리고만 있는 것이 최선의 선택일까요? 당신은 문득 그런생각을 합니다.
            </p>
        </div>
    </div>
    <div v-if='progress == 4' class='options'>
        <ul>
            <li @click='option3'>&#12297; 의자에서 일어난다.</li>
            <li @click='option2'>&#12297; 컴퓨터를 조작한다.</li>
            <li @click='ending1'>&#12297; 무시하고 계속 멍 때린다.</li>
        </ul>
    </div>
</section>

<!-- Ending 1 -->
<section v-if='progress == 5' class='storyBox' @click='toEnding1'>
        <div class='textarea'>

    <div class='paragraph'>
        <p>
        당신은 쓸데없는 생각이라고 결정하고 계속 멍을 때립니다. 누가 와도 당신의 결심을 꺾을 순 없을겁니다. 당신은 계속해서 멈추지 않고 그저 멍만 때리기로 결정했거든요. 당장 사무실이 무너져야 이 의자에서 당신을 일어나게 할 수 있을지도요. 하지만 파스텔 톤의 사무실은 언제나와 같이 고요합니다. 마치 돌을 던져야지만 파동이 일렁이는 호수의 수면처럼요. 당신은 시야가 서서히 흐릿해지는 것을 느낍니다. 꿈이 곧 끝나간다는 신호입니다. 그제서야 당신은 자신의 행동의 의문이 생깁니다. 그러나 당신의 무의식은 현실로 밀려나고 있습니다...
        </p>
    </div>
</div>
</section>
<!-- Chose Option 2 from initial state 1 or 2 -->
<section v-if='progress==6' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        당신은 깜박거리는 컴퓨터 화면을 바라보다가 문득 컴퓨터를 조작해보기로 합니다. 연노란색의 마우스를 이리저리 움직여봅니다. 마우스가 책상 표면 위를 마찰할 때마다 어찌된 일인지 달콤한 향이 나는 것 같습니다… 이건… 바나나 향인가요? 꿈 속 세계의 놀라움에 잠시 정신이 팔렸던 당신은 한참 뒤에야 바뀐 컴퓨터 화면을 발견합니다. 화면 속에서 당신이 찾은 것은…
        </p>
    </div>
    <div class='paragraph' id='quote'>
        <p>
        “What dreams do you dream?”
        </p>
    </div>
</div>
<div v-if='progress == 6' class='options'>
    <ul>
        <li @click='proceed2'>&#12297; 이게 뭐야?</li>
    </ul>
</div>
</section>

<section v-if='progress==7' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        좋은 질문입니다. 대체 무슨 의도로 이런 문장이 써있는 걸까요? 당신은 마우스를 몇 번 더 움직여보고 키보드도 두드려보지만 화면은 같은 문장을 변함 없이 비추고 있습니다. 신경질이 난 당신은 마우스를 쾅 하고 책상에 내리칩니다. 그 순간 컴퓨터는 다시 원래의 깜박이는 화면으로 돌아옵니다. 시간낭비만 했네요… 라고 당신은 생각했지만 꿈 속에서 시간의 개념이 현실과 같이 적용되는 걸까요? 철학적인 생각이 꼬리를 물고 이어집니다. 당신은 다시 의자에 등을 기대어 앉아 사무실을 둘러봅니다.
        </p>
    </div>
</div>
<div v-if='progress == 7' class='options'>
    <ul>
        <li @click='option3'>&#12297; 의자에서 일어난다.</li>
        <li @click='option5'>&#12297; 컴퓨터를 조작한다.</li>
        <li @click='option1'>&#12297; 그저 멍 때린다.</li>
    </ul>
</div>
</section>
<section v-if='progress==8' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        당신은 깜박거리는 컴퓨터 화면을 바라보다가 문득 컴퓨터를 조작해보기로 합니다. 연노란색의 마우스를 이리저리 움직여봅니다. 마우스가 책상 표면 위를 마찰할 때마다 어찌된 일인지 달콤한 향이 나는 것 같습니다… 이건… 바나나 향인가요? 꿈 속 세계의 놀라움에 잠시 정신이 팔렸던 당신은 한참 뒤에야 바뀐 컴퓨터 화면을 발견합니다. 화면 속에서 당신이 찾은 것은…
        </p>
    </div>
    <div class='paragraph' id='quote'>
        <p>
        “What dreams do you dream?”
        </p>
    </div>
</div>
<div v-if='progress == 8' class='options'>
    <ul>
        <li @click='proceed3'>&#12297; 흠...</li>
    </ul>
</div>
</section>
<section v-if='progress==9' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        한번 더 시도해본다고 뭐가 달라지지는 않았습니다. 당신은 다시 의자에 등을 기대어 앉아 사무실을 둘러봅니다.
        </p>
    </div>
</div>
<div v-if='progress == 9' class='options'>
    <ul>
        <li @click='option3'>&#12297; 의자에서 일어난다.</li>
        <li @click='option5'>&#12297; 컴퓨터를 조작한다.</li>
        <li @click='option1'>&#12297; 그저 멍 때린다.</li>
    </ul>
</div>
</section>

<section v-if='progress==10' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        당신은 넋 놓고 의자에 앉아있어 봤자 바뀌는 것은 전혀 없다는 사실을 깨닫습니다. 그런 생각을 하자마자 널부러져있던 당신의 다리에 힘이 생기는 것 같습니다. 당신은 의자를 박차고 일어납니다. 분홍색 의자가 드르륵하고 뒤로 밀려났지만 당신은 신경쓰지 않습니다. 분명 어딘가 무엇이든 있을텐데… 당신은 사무실 안을 걸어다니며 눈에 띄는 무언가를 찾으려 애씁니다. 문제는 알록달록한 사무실 안에서는 무엇이든지 다 눈에 띈다는 것이죠… 그 때 무언가 당신의 시야에 걸립니다.
        </p>
    </div>
    <div class='illustration'>
        <img src='@/assets/ep_illust2.png' alt='illustration'>
        <p class='caption'>생생한 장면이 꿈에서 펼쳐졌습니다.<br/>당신은 이 장면을 기억할 것입니다. +정신력 1</p>
    </div>
</div>
<div v-if='progress == 10' class='options'>
    <ul>
        <li @click='proceed4'>&#12297; 이게 뭐지?</li>
    </ul>
</div>
</section>

<section v-if='progress==11' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        이것은 벽입니다. 파스텔 핑크 색으로 예쁘게 칠해진 벽이죠. 지루한 연회색이던 현실의 사무실과는 아주 다른 느낌입니다. 잠깐… 잘 보니 이건… 문고리입니다!
        </p>
    </div>
    <div class='paragraph'>
        <p>
        맞아요, 확실합니다. 같은 핑크색으로 칠해져있어 잘 안보였지만 확실히 문이 있어요. 당신은 심장이 조금 더 빠르게 뛰는 것을 느낍니다. 어떻게 이 문을 지금에서야 알아차렸을까요? 이 곳은 사무실이고 사무실에는 당연히 나가는 문이 있을텐데 말이죠. 하지만 그런 것은 지금 중요하지 않습니다. 처음으로 당신은 이 꿈 속 사무실에서 나가는 문을 찾았으니까요! 당신은 손을 뻗어 문고리 위에 올립니다.
        </p>
    </div>
</div>
<div v-if='progress == 11' class='options'>
    <ul>
        <li @click='option7'>&#12297; 가만히 있는다.</li>
        <li @click='option6'>&#12297; 문고리를 돌린다.</li>
    </ul>
</div>
</section>

<section v-if='progress==12' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        철컥- 소리와 함께 문은 아무런 저항 없이 쉽게 열립니다. 당신은 마음 속 한 구석에 바람이 통하는 것 처럼 시원하고… 다소 김새는 기분을 느낍니다. 이렇게나 간단하게 나갈 수 있는 곳을 며칠씩이나 꿈 속에서 갇혀있었다니! 하지만 지금의 변화가 중요한 것이죠. 당신은 그런 생각을 하며 다시 마음을 다잡습니다. 문이 열릴수록 바깥의 빛이 틈 사이로 쏟아져 들어옵니다. 당신의 심장이 조금 더 빠르게 뛰기 시작합니다. 알 수 없는 기대감과 긴장감을 느끼며 당신은 문고리를 힘차게 당겨 문을 완전히 열어재낍니다.
        </p>
    </div>
    <div class='illustration'>
        <img src='@/assets/ep1_image.jpeg' alt='illustration'>
        <p class='caption'>생생한 장면이 꿈에서 펼쳐졌습니다.<br/>당신은 이 장면을 기억할 것입니다. +정신력 1</p>
    </div>
    <div class='paragraph'>
        <p>
        문 너머에서 당신이 마주한 풍경은 당신이 상상했던 것과는 달랐습니다. 뻥 뚫린 창으로 들어오는 선선한 바람과 눈부신 햇살, 바닥에서 시작해 벽을 타고 천장의 파이프까지 주렁주렁 자라난 덩쿨, 그리고 시멘트를 뚫고 솟아난 잔디와 들꽃들은 선로의 바닥까지 대부분 덮고 있습니다. 공간을 채우며 열을 이루고있는 의자에도 풀이 타고올라 자라있습니다. 당신의 바로 앞 위쪽 천장에는 표지판이 달려있지만 천장에 매달린 덩쿨 잎사귀에 가려져 내용이 보이지 않습니다. 확실히 이런 광경은 지금까지 본 적 없는 것이지만 당신은 이 곳이 어디인지 알고 있습니다. 이 곳도 당신이 매일같이 방문하는 장소이기 때문이죠.
        </p>
    </div>
</div>
<div v-if='progress == 12' class='options'>
    <ul>
        <li @click='proceed5'>&#12297; 여기는... 지하철?</li>
    </ul>
</div>
</section>

<section v-if='progress==13' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        …당신은 문고리에 손을 올린채로 서있습니다. 시간이 조금 흐릅니다. 문은 여전히 닫혀있습니다. 당신은 아무리 꿈 속이지만 문고리에 손을 올리는 것만으로는 문이 열리지 않는다는 것을 알게되었습니다.
        </p>
    </div>
</div>
<div v-if='progress == 13' class='options'>
    <ul>
        <li @click='option7'>&#12297; 가만히 있는다.</li>
        <li @click='option6'>&#12297; 문고리를 돌린다.</li>
    </ul>
</div>
</section>

<section v-if='progress==14' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        그렇습니다. 당신이 평소에 알던 지하철과는 다소 다른 풍경이지만 틀림 없이 이 곳은 지하철 역입니다. 당신은 문득 뒤를 돌아 당신이 걸어 나온 문을 확인합니다. 하지만 그 곳에는 엉키고 엉킨 풀이 덮고 있는 벽만 존재합니다. 분홍색 문은 어디에도 보이지 않습니다.
        </p>
    </div>
    <div class='paragraph'>
        <p>
        그 때 익숙한 멜로디가 어디선가 들려옵니다. 당신은 귀를 기울입니다. 잠시 지직거리는 소리가 나더니 곧이어 안내방송이 나오기 시작합니다.
        </p>
    </div>
    <div class='paragraph' id='quote'>
        <p>
        [--역의 오신 승객 여러분 환영합니다. 다음 열차는 --행 열차입니다. --행 열차는 --분 뒤 도착 예정입니다. 승객 여러분께서는 안전선 뒤에…]
        </p>
    </div>
    <div class='paragraph'>
        <p>
        당신은 안내방송 내용을 이해하려 최대한 집중해보았지만 스피커가 물에 잠긴 것처럼 먹먹한 음성때문에 중요한 내용을 놓치고 말았습니다. 그렇지만 이 역에 열차가 들어온다는 사실은 알게 되었군요. 당신은 주변을 둘러보지만 양 끝이 뚫려 막막한 어둠 속으로 이어진 선로를 제외하고는 달리 갈 곳이 없어 보입니다.
        </p>
    </div>
</div>
<div v-if='progress == 14' class='options'>
    <ul>
        <li @click='option9'>&#12297; 의자에 앉는다.</li>
        <li @click='option8'>&#12297; 선로에 내려가볼까?</li>
    </ul>
</div>
</section>

<section v-if='progress==15' class='storyBox'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        당신은 잠깐 아주 모험적인 생각을 해봅니다. 하지만 안내방송에서 다음 열차가 들어올 것이라는 내용을 기억해내고 바로 생각을 접습니다. 아무리 꿈 속이라지만 달리는 열차와 마주하는 것은 피하고 싶거든요.
        </p>
    </div>
</div>
<div v-if='progress == 15' class='options'>
    <ul>
        <li @click='option9'>&#12297; 의자에 앉는다.</li>
    </ul>
</div>
</section>

<section v-if='progress==16' class='storyBox' @click='toEnding2'>
    <div class='textarea'>
    <div class='paragraph'>
        <p>
        당신은 그나마 풀이 덜 덮고 있는 의자를 찾아 자리에 앉습니다. 등받이에 자라있는 풀이 의외로 푹신하고 편안합니다. 당신은 의자에 앉아 초록색이 만연한 역 내를 하릴없이 둘러봅니다. 다음 열차는 언제 오는 것일까요? 선선한 바람이 역 내로 불어오자 풀 내음이 물씬 풍기기 시작합니다. 당신은 당신의 몸이 따사로운 햇살 속 점점 노곤해지는 것을 느낍니다. 이대로 있으면 잠에 들 것 같습니다. 이미 꿈 속에 있는데 꿈 속에서 또 잠에 든다는 것이 가능한 걸까요? 모를 일이지만 왠지 당신은 곧 알게 될 것 같다는 생각을 하며 천천히 눈을 감습니다.
        </p>
    </div>
</div>
</section>
<div class='hl'></div>
<span class='pageNum'>-{{page}}-</span>
<NavBar/>
</section>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'
import NavBar from '@/components/NavBar.vue'
import { useRouter } from 'vue-router'
import state from '@/main.js'

export default {
  name: 'Episode1View',
  components: {
    HeaderBar, NavBar
  },
  setup () {
    const router = useRouter()
    const toEnding1 = () => {
      router.push('/ending1')
    }
    const toEnding2 = () => {
      router.push('/ending2')
    }
    return {
      toEnding1, toEnding2
    }
  },
  data () {
    return {
      progress: 1,
      previous: undefined,
      page: 1
    }
  },
  mounted () {
    this.startAnimation()
    state.state.incrementWillPower()
  },
  methods: {
    startAnimation () {
      const elements = document.querySelectorAll('.storyBox > div')
      let delay = 0
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i]
        const className = el.classList[0]

        if (className === 'paragraph') {
          const element = el.firstChild
          const lettersArray = element.innerText.trim().split('')
          element.innerHTML = ''
          lettersArray.forEach((letter) => {
            const span = document.createElement('SPAN')
            span.innerHTML = letter
            span.style.opacity = 0
            element.appendChild(span)

            setTimeout(() => {
              el.style.opacity = 1
              span.style.opacity = 1
            }, delay)
            delay += 20
          })
        } else {
          delay += 500
          setTimeout(() => { el.style = 'opacity:1; transitionDelay:2s' }, delay)
          delay += 1000
        }
      }
      const options = document.querySelector('.options')
      if (options) {
        setTimeout(() => { options.style.opacity = 1 }, delay)
      }
    },
    proceed1 () {
      this.progress = 2
      this.previous = '그걸 내가 어떻게 알아?'
      this.page = this.page + 1
      setTimeout(() => { this.startAnimation() }, 0)
    },
    option1 () {
      this.progress = 3
      this.page = this.page + 1
      this.previous = '그저 멍 때린다.'
      setTimeout(() => { this.startAnimation() }, 0)
    },
    option4 () {
      this.progress = 4
      this.page = this.page + 1
      this.previous = '계속 멍 때린다.'
      setTimeout(() => { this.startAnimation() }, 0)
    },
    ending1 () {
      this.progress = 5
      this.previous = '무시하고 계속 멍 때린다.'
      this.page = this.page + 1
      setTimeout(() => { this.startAnimation() }, 0)
    },
    option2 () {
      this.progress = 6
      this.page = this.page + 1
      this.previous = '컴퓨터를 조작한다.'
      setTimeout(() => { this.startAnimation() }, 0)
    },
    proceed2 () {
      this.progress = 7
      this.page = this.page + 1
      this.previous = '이게 뭐야?'
      setTimeout(() => { this.startAnimation() }, 0)
    },
    option5 () {
      this.progress = 8
      this.page = this.page + 1
      this.previous = '컴퓨터를 조작한다.'
      setTimeout(() => { this.startAnimation() }, 0)
    },
    proceed3 () {
      this.progress = 9
      this.page = this.page + 1
      this.previous = '흠...'
      setTimeout(() => { this.startAnimation() }, 0)
    },
    option3 () {
      this.progress = 10
      this.page = this.page + 1
      this.previous = '의자에서 일어난다.'
      state.state.incrementWillPower()
      setTimeout(() => { this.startAnimation() }, 0)
    },
    proceed4 () {
      this.progress = 11
      this.page = this.page + 1
      this.previous = '이게 뭐지?'
      setTimeout(() => { this.startAnimation() }, 0)
    },
    option6 () {
      this.progress = 12
      this.page = this.page + 1
      this.previous = '문고리를 돌린다.'
      state.state.incrementWillPower()
      setTimeout(() => { this.startAnimation() }, 0)
    },
    option7 () {
      this.progress = 13
      this.previous = '가만히 있는다.'
      this.page = this.page + 1
      setTimeout(() => { this.startAnimation() }, 0)
    },
    proceed5 () {
      this.progress = 14
      this.page = this.page + 1
      this.previous = '여기는... 지하철?'
      setTimeout(() => { this.startAnimation() }, 0)
    },
    option8 () {
      this.progress = 15
      this.previous = '선로에 내려가볼까?'
      this.page = this.page + 1
      setTimeout(() => { this.startAnimation() }, 0)
    },
    option9 () {
      this.progress = 16
      this.previous = '의자에 앉는다.'
      this.page = this.page + 1
      setTimeout(() => { this.startAnimation() }, 0)
    }
  }
}
</script>

<style lang="css" scoped>
    .container {
        height: 844px;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    .storyHeader {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .storyHeader > img {
        width: 229px;
        height: 121px;
        margin-top: 61px;
    }

    .storyHeader > span {
        width: 390px;
        padding-left: 30px;
        font-size: 13px;
        font-family: 'Nanum Gothic';
        font-weight: 700;
        line-height: 22.75px;
        letter-spacing: -7%;
        color: #AAAFB2;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .storyBox {
        background-color: rgba(255, 255, 255, 0.8);
        display: flex;
        flex-direction: column;
        height: 500px;
    }

    .textarea {
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        padding-left: 30px;
        padding-right: 30px;
    }

    .textarea::-webkit-scrollbar {
        display: none;
    }

    h3.title {
        font-style: normal;
        font-weight: 800;
        font-size: 1rem;
        color: #485778;
    }

    div .paragraph {
        width: 100%;
        text-align: left;
        font-size: 0.75rem;
        text-align: justify;
        line-height: 175%;
        color: #151C36;
    }

    div .paragraph#quote {
        padding: 1.25rem;
        text-align: center;
    }

    .storyBox > * {
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    .illustration img {
        width: 95%;
        height: 95%;
        padding: 2.5%;
    }

    .illustration .caption {
        font-size: 0.75rem;
        text-align: justify;
        letter-spacing: 0.05rem;
        font-style: normal;
        font-weight: 700;
        color: #485778;
        padding: 1rem 0;
        line-height: 200%;
    }

    .options {
        background-color: transparent;
        opacity: 0;
        transition: opacity 1s ease-in-out;
        margin-top: auto;
    }

    .options ul {
        list-style: none;
        padding-left: 30px;
    }

    .options li {
        width: 390px;
        font-weight: 800;
        font-size: 0.8rem;
        letter-spacing: 0.05rem;
        color: #151C36;
        font-style: normal;
    }

    div.hl {
        width: 329.2px;
        border: 0.4px solid #A1969E;
        margin: 0 auto;
    }

    span.pageNum {
        text-align: center;
        font-family: 'Nanum Gothic';
        font-weight: 400;
        font-size: 14px;
        line-height: 24.5px;
        color: #A1969E;
    }
</style>
