<template>
<section class='container'>
    <p>
        Dream Compass의 데모 버전을 플레이해주셔서 감사합니다.
    </p>
    <p>
        여기까지가 데모 버전에서 현재 구현된 플레이입니다. 방금 플레이하신 에피소드에는 총 두개의 엔딩이 있습니다. 만약 엔딩을 하나만 보셨다면 나머지 엔딩도 찾아보시길 추천드립니다!
    </p>
    <p>
        아래 구글 폼을 통해 피드백을 받고 있습니다.<br/>
        참여에 감사드립니다.
    </p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVeOFq6SRgPDvctQFas7PUQ3qdeZVoZLZta3tGOYxU3DzN0g/viewform?pli=1">https://forms.gle/caFre1VHghp5Wqpt7</a>
    <p>
        프로젝트 총괄, 앱 기획, 디자인 - 정서진 <br/>
        앱 개발 - 정서현
    </p>
    <p>
        앱 제작 리소스 출처
        <ul>
            <li>Unsplash의 Christina Deravedisian</li>
            <li>Unsplash의 Alex Perez</li>
            <li>AI generated images from Picsart</li>
            <li>Prototype powered by Figma</li>
            <li>배경음악 - 잉꾸의 모험 provuded by 나나양</li>
            <li><a href="https://youtu.be/Lz1olyNwUPY">https://youtu.be/Lz1olyNwUPY</a></li>
        </ul>
        관련 문의: jsj3189@yonsei.ac.kr
    </p>
    <button @click='toHome'>&#12297; 처음으로</button>
</section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'ThanksView',
  setup () {
    const router = useRouter()
    const toHome = () => {
      router.push('/home')
    }
    return {
      toHome
    }
  }
}
</script>

<style lang="css" scoped>
    .container {
        margin: 0;
        padding: 20px;
        width: 350px;
        height: 804px;
        overflow: hidden;
        color: white;
        background: rgba(33, 33, 33, 0.67);
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 175%;
        text-align: justify;
    }

    .container li {
        margin-left: 1rem;
    }

    a {
        text-decoration: none;
        color: white;
    }

    p {
        margin-bottom: 1rem;
    }
    ul {
        margin-top: -0.5rem;
        margin-bottom: 1rem;
    }

    .container button {
        border: none;
        background-color: transparent;
        position: absolute;
        right: calc(50% - 195px + 10px);
        bottom: calc(50% - 422px + 10px);
        padding: 1rem;
        color: white;
    }
</style>
