<template>

    <div class="mail-box">
        <div class="img">
            <img
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.goal.com%2Fv3%2Fassets%2Fbltcc7a7ffd2fbf71f5%2Fblt7d4c0e4b2d17fadf%2F63334de733b2184214709089%2FGettyImages-1243551401.jpg&imgrefurl=https%3A%2F%2Fwww.goal.com%2Fen%2Fnews%2Fneymar-hailed-by-ex-barca-team-mate-iniesta-he-s-a-machine-always-provides-spectacle%2Fblt7159ba2d39a04529&tbnid=OOWNQJgX5iXKlM&vet=12ahUKEwis1df4h6f7AhXRidgFHeSfDr8QMygLegUIARD4AQ..i&docid=KWBwTq0CEh_nMM&w=1920&h=1080&q=neymar&ved=2ahUKEwis1df4h6f7AhXRidgFHeSfDr8QMygLegUIARD4AQ" />
        </div>
        <div class="info-box">
            <h3>This is Sainath</h3>
            <p class="info">This is Iresh</p>
            <p class="info">This is Esha</p>
            <p class="info">This is Akansha</p>

            <div class="button-bar">
                <el-button type="primary" text>More Info</el-button>
                <el-button color="#E63946">Send Test</el-button>
            </div>
        </div>


    </div>


</template>

<style lang="scss" scoped>
.mail-box {
    height: 393px;
    width: 307px;
    border-radius: 24px;
    
    .img {
        height: 60%;
    }
    
    .info-box {
        height: 40%;
        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px;

        padding: 13px;

        background-color: #052935;
        color: white;

        h3 {
            font-size: 20px;
        }

        .info {
            font-size: 13px;
            color: #ccc;
        }

        .button-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-top: 10px;
        }
    }
}
</style>