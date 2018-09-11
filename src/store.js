import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedPosts: [{
      id: 22,
      date: '2018-08-16',
      name: 'Tokyo',
      src: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Japan/Tokyo/Tokyo%20lead-xlarge.jpg',
      description: 'lorem epsum',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      id: 21,
      date: '2018-08-16',
      name: 'Paris',
      src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFhUVFxUVFRYXGBUYFhUXFRUWFxUXFRcYHiggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHx0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJgBTAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEEQAAEDAgMDCAgEBQMFAQAAAAEAAhEDIQQSMUFRYQUGEyJxgZGhFDJCUrHB0fAjYpLhFVNygvEWQ6IzY7LS4wf/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAlEQACAgICAgICAwEAAAAAAAAAAQIRAxIhMRNRQWFx8DKR4SL/2gAMAwEAAhEDEQA/AOChIFE6NNkXrHAME+VPlTysEHCe6lCUrGIOJ3IZYUclQJQCCcwpmgoolTDVg0DaSi0hKcUU7WFYZIMGKQpo9NltEZrUrZRRKgYmNJXsgUhRCGw6gZ4pojWq50KkKSDkMoFZoRqbAjDDojcMdyRyRRQZFlMIgoo1OijspBScyygVBhlMYdaAwykKCm8g6gZpw6p8pYT8N5/K7bE237Fv9EqHLdP8F5tpt4kBZZOTSgqPNsOOuDINxrI2G8bexehUqAXDYYfiC7dRqL3MSeP7L0jD0pY1wMy1pnfIBR2olijZWZRVilRVhtNHZTslcy+pV6FP6MrQoolOmk3NRS9HS9HWl0KXQreQGpRFBSGGVwUU/Robgoqei8ERlCFaaphqGzBRUdSQDgwtMsUMiykwOJnMwTRslT9H4K8WqBajuxdTzIGU4pp3Hgk0L1Dy6F0SiWI+oTCNq1jagRTJRG0wjgjYiMpbRCGwygVjRTdAdVc6M9qdrRxQ2DoZ7qB3JNpcVptCJ6ODqtsMsZnU6PFEyb1dbgxx+Sl6MhuhljK9Jys5Ae1TbThSDEjkVjEH6PxUxQG9TDFIUUrkUUCIofmRm0Em0EVlOEjkUURNpEIrWhFp0p2qw3C8VGUh0iu1oRGsCOMOpNw/BTckOkDFNLoyjdCphhS7DUVTTKzecDT0D7A28IvPdErda0LL5ytHRARJLwANh6rjB4aDvTRlyCUf+WecUnnpT+HtaOwucNXRrfyXpvJ0mmzQ9UCRYGLWGzReeYdreld1CQM0idQC7NA9mADB2RuXpnItGaTbe8LRHrGCItcQbb02R0iWFcsn0QU+gVxtCNiMyio7F9TPFFTbSWgaIUcgW2BRWFNS6NHy8U4jehYpXDEjTVjvTFw3rWAr9EnDFJ1Zu9MawR5FGyJsqi7EBVn1J1KKTFZaIUCFXYfzfFRfVvqU1As82aUYNU2s3hSZRC9Vs8tIGGFOGq30QAUC3gUtj6kGt4KQpKRadYUqcbQfFAdIWSNqIwngoljeKVKmZ6pSsdIKHncjNdGoKi2k7bBRKdCdpCRsqoj2OhhFIMXTjC96P6IR2eKRzRRRAMoKZpRslWmYMxIgolPDu3KbyFFEqtYOxEDW7wjVsO7cUJlK+hQ2DqSbUAVhmU7ENuFOoHwU2tixBCRtDpBm0huRw0DcqzWHtRmUHbikbGSCOATNCdtM7j3otOiUtjUMwIkhE9GS9EnalsIHpWjYsHnbWBYxufKHOvcAxmYCQeGb70XSjArmOdrSHsDaYeWgOgmAQS7M2N5yt8U0P5C5P4nFYZn4jpqGcxkxDh13dbMdo1716Jzaxc0bEmDfvY1032HNK4ChQc2ofw5IqNANgzMajwCCHX7dLncu65qMd0cFsZQ0AXtBcNt9A3x7hTJ0Txdm56U5RNVx2lINKIMM5RLsAXHeVA1SFd9C3qLsCeCKaEZTNYpumKtehka37wiNw4GoPYjaFMt+IcN6E/FO3FaFSg3fHmq1W2h8k6aEZQqVX7ihOc7arr6pVepW2FVT+ibAdbf5qDnQikA6WQXtjeqImxek2Qem7fFRqVtyCaydRJORE8mOGyeI1RmcniNs/eq0sx2AeKi179rT4tS+SRlBIqeggakdsEeMaJO5JnQrUpA7fl8kdoCm8rRRQTMhvJfb4qJ5JnTzW4GqQal80h/GjIbyT2ItLkwjQgLTyBEbTSPKx1BFGngbyQFYZhBuCthim1im5soolVuEAvCm3D8ArjaanASOYyiZxwW6ym3BjaFfBG8eKKG8EN2MolGngwDKsCiNyshnBPk4JXINFM4WUjgRtEq8G8FIRuWthM3+HgGRZWadLerbSEi4LW2YrGiDsUBQg6yrD3hVn5N58Vghmlo1jxCkXMiQq4xLAOKTqwd7Pgf2WoxJxnT4gLiOddVhqlrqhBs0AEE3A9mL38J8eqx2KNKm57WF5aJyCxMaxmtpJ7l5LiuU6uJrZnhjZJMRJAu8w0GG6E3JV8Ue2SyyXCCU6zS+pUa7qF4IDWAEtJc6zZhtt09912/M7EMzZQXTGWHE36oJcNkEscR2mdF5+/KRJNOJEyyoLwfdeRvExtWlyTyjWpvDqRYXOyu1cM3sjMHUyd4mxvxVJKycXR66OKkHQq9IuDRmIzQM0G0xeOCc39pc5cK6shPrOTdGVB4hEVsZ1Vx2whOB3oopcPFTyxsRFKDqMpOpCNFcfTGpMJg1u9NYrMx1Ei4CGWTr8lrQOCVhsTbMVoxnYc7ECthXRaZW85w3Ko+n+aO5MpMRpGF/CajtYHfqn/gzxsHitxtN49VwPaE7sK43LvJP5ZE/GjnhjmRM271NnKNP3viuVDDslXMNRi7tNxGvDgumWKJzxyyfwdIzlCmfaR2Yph9ofBcx1CYAgcSrFOjTtNQRtgSpSxRKxyM6Vldp0IR2PCyMNQpRZ8/3fJXKGEAOs+NlzSSR0RbZfNMO2nuKOxkKo6hMDMQBuRKVCI9Y/wBxHkpP8lUWw0JhhQb5nDvPwU2MEXmNxv8AVCqYVpMgEdgkeCSylB+gt63j+yA7Ds9qO4/JFZyfNwT32RWcnAHSR3fRLsl8jUBoPa0aOI4x8kYYwbGlSOCdPVDWjvKI7AO3jushshqFTxA495HzKmK3Fsdt0F/JridRHmjMwJHuz2Fa0agrKzTtCKBwQ/RZ1KKKcIWGhhTG5S6DgmJUm1YWsFAX4fgqr6Am7AtLpSgvYSipGooGhewR6ci0Kw1ifKtZjH5wAMw9RzQM5GVva609wl39q8xxGHq0nkFrQWsdUiRo9uVplpjdv0XoHPCu1zqdB1QtBILoLWk55aIJ9Uhoee8dh4zlKoKmIqk3AqUqIDMpbkD2lgaYj2XQIjYDcEdOJVH8nPN3L8GVyjWr0mEmi1wDpJgxDWO61nHTK7wR+SxUfLTRYxzTeI9R5gkCDPWBkLU5Vwk4cENLA5jTo1tyx494WJftOy8LMoEdKxz5LatBnSZcwgPY0gsM2JeDwl2l4VElViOUtqs9N5Oq5qTCSCYAJ3kDXhNjHFGcVhc2eUWXYDmzZjmE5S6mQx8Sdbabm9oG304/wP3U2qY6doYuO9RJKJ2D5KQYTshDgBVdO8qEcSrjqZ4KPQTuTWhXZVgJxCsejcQodAVrQOSIPBOXwouov2HyCC/DPOrz5ha0Dkk/Ex7JVd9eodA0dpCTsGffd5oLuS2nUk96Zaiuwnpbo9kH+ofBVnYqdaoHj8kZvI9Pj4p/4TS4+KNwQtSPNg471MOO9IMG/wAlMNG/yXp2eakIIrGJmtHDzRmJWysUOymdhPmrLKb9jj4pqTJ2eav0MLPsn9QUZTo6IQsFRFbQOPcVeoek6Av8SiUsM783iFcZhn7C7zXNPKvo6Ywf2PTqYv8AN/xKt0q+KHsnvAU6FJ+8+M/EK/Rok6l3jbyXJPIvSOmMH9lWjja+0Twj6Iwx9XcB2x81ep0j7x8kVtL8zvFReReiiiyq3G1IsBx0+qMzGOOwz/SPqrLcO3cFPI3S3kk2Xoeis7EkizXz2gA+Km2o8/7f/IIraLBt81ItbpmPitaMRpNLvWaBuvJRwAgim3efEqWcDct2Ak6mDw7goupDZA7kumG8JjVRpgtEOid73kFA4Qk3cP0hENZROJCbkW0Ho0Q3YPCFJ5aASYAFydgVX0pcN/8ApGMdNOmKLHhzSS51y2HbBGh+qaEHJ0LKdKweL5y4fpalR+pa4ANDXOk2YDBIaQGtvrrIXN4Plei1rQ1wBBe7/pujc0RBkXjZEN3LIqCobEtaNwbYRoA11hoNAtRmGAY0F1TNlE2aRJbaxHFtuHELtlGMUc8XKTNfF8vYZ46IvabUwHEFrGtY4l1iTeSYM3ndCzsVjaQwzaTXNL6ejy9oECoXNMkz6to067twkVTCZZLXuENkkMpGAQYDjAtdg8eCE+nvfOvrMZp1o9U9nnwkRcUGUXZ1XJHKzbPb0YhtMz0jcrjYFu5jsrWiZg5nmTNu3weNoVf+lUpv2w1zSR2gG2q8bdgYcbsBGocx4IiNgfujxHf1fMqvXNTozUb0eV7mgNIl3U0JM+8Y4JJRT6Yba7R6CaYUTT4LLqU3e+fP6qu+m73z996RQfsDmjYgcExA4eSwn0j7zvJDLPzO8k3jfsV5Ub5jeFG3vBc89g3v8UMtb+bxKKxP2I8yOidHveaE9zfe81gmOP6nKJDfsu+qPi+weZGy+q3ehGo3esSvXps1+NQ8PvtSFRhuGz3uTLEI8yNou4qBqDesYuZ7nxUep7vx+qPiF8yPOeT+UWnqvtuK1cGM7Q7SZ8iQuQlaeF5SLGxcnZp3zIXRHK/kj418HU0sMNpjw+qt08G33/h9VybeXD7gnt/ZWqPLrgJLGHdeO2yLk30xopLtHWU8Ez3/AIfVW6FCn73D1ly/+oMrQ51IAO0ggzx0RcDy+xrJc0ySXWaPaJO09vgoyUn8l4yj6OupMaPb8JVqnl993muWpc5aMTJF4jKZHhZWKfOSh78XiCDP+FCWOReM0dUzL7zvAozMm9x7v2XOM5bo/wA0d8ieyRdW6HK1I6VWm8WKjLGyymjdb0f5vJHY6n+ZYbOWaMT0rQOJj49iuUcfTdpVYexzT81NxZRSRqtLNzvFEDme6fFZvplMa1GD+4KNLlSm4hoeDJgQQQbD5mElMezWGX3B4hSy/wDbHiuL5W55so1TTDA8NsSHbbyNIsY81pcic4qeIJDQ5sNzdaLiYJ4RZM8c0rF3i3R0QA9wJ4G5q5zEc58O0Wc552Na0yd5BNiFnV+ebA6BRqcc0NPGAisc38CuaOzJb+XyTFzeC8+5Q521nGaADGZRZ8ZiZMkE2iI81pch86mvBFchjrZcrXEOEXPVmDIO5O8MkrF3R1uZu8LBxnOmmxzmhhcG6kHcYMDz7li85OczcuSjV9aM1iCASLCdDbzXG1MeQ4gRu0ue3frHcFXHivlk5zSPRsJzzpOPXYWgTJBmAA3Z2uPguX5b5UdU6TFS0BshrS65DZAawbTDp0gkm6xHVSRa2/yB7VDF4/pBTpPc4UqZDsrcvrDV0xM5ZAPHuNo40nwTlPgt4au+pkLermIzWgNAMOMwL3N9Dl4q/gcZUILqjmtkwGAwQ2LgyZNzuWLjuVGuJ6NoY2wABOjQAPhPehUsYQJn7si4WZZKN7EcrOzAshpa0C0mbh1z2gFXncvhzD0gYTDg0hpDi4xcntH+Vx78Q7fCm2qYM62jbqdErxRYVmZ1DecFH1X0aZOmYnTMQdY2IeI5Zw8BzKTWEPa/qPcDG71eE96411WLneoCsssKXIjzt9nb1OcTjJa9wNiZrPM5bWHHwVX/AFA/pR136ujrg5ZBBi0btfJcgavGEi+/BOoIm8n0dpg+duUnOHvsRBLd/VPbsMK3V54U4ltO86OcQf8Ai0rguk2qJrkXlNqhG0zssLzxcXPz0hlE5MsyNgBnVO7nc4Nk0mEgw4B7rXsRLb24rjRitdsjfuIv970NuI4/v2otIXg6rEc7ariMlNjYiQ4k5ptuEX+9VZq853tZmdQEzEZ9on2YkCxXIisTodersE71PE4lznEmQdto0MGZ7wiBpHRv52hwyijctMkvtOWbW7R2wr9Xl+P9k7NajBc7BOvdwXCmp9ns/ZFGIIm5vBsDGljr2Ii6o63/AFTR914M8I1uZn5K9T5dpkS2SN/V+d15+SB/k/RMa7jtPifktwDX0Ush3fYVjDUSTOWQLmSALzGqTKLyNDEEGA4yDG4JugD+rOhEyHbNARsS6j2EpUmD1gCdv4je/aiehuddjRH9bT801Hk4ucSCMoganXge8K9hsAWRliRtzOnXhCZY5MG6KxwVR1gz1dbt87pm4Rw1j9VPu2q3VwtRzgXEEAk5TmLTOk3iyvUBVaAGtaBsAzCPBHxyDvEz6GDqRApTFzBado3H7lPSwFQ3DD5Rt4rWoUKmykwbbSL79FKnhK4EPDX7etJHgQUrhK+yia+zI9CqbB5i/BWKGBewZiyp/bYfqutWnh3D/Zo/p/8Amj1KVcjqhjLy4jN1rRDupf8AZLJSXRSNfJRo0nTmdSrRstmEX2QPiiUnPlx6BxBjRrrAWg270q/IlWrd7i4ySDnfbhGSFKrySWs0uIPVdUJJFtjRuU3Fv9/0opU+v3+gGI9Ic6G0i0e6GEagSYi5RHVcZTGSjTcGkEOOQz1gAQ05erpsVdlfFdWDXGWwJbUdY6T1QY7yi4+jnDXVQah957ehAgDV1T1tCBfctq+nQ2yd9ldnJzmNqOqhzfwnFnV9uWwDOggm6svqZX1KdKs4UTSaHnKXTDes0xxB7FpYWzWkUWPGWIbVMgWkFgJF4FxuV7D8j0qhc3J0dQtlwLs8B5I0NiIbv3TuSt1zIKinxE5eny4M4eYdGgeHZW2g2BvI3qnyhjRVqZwGM2w3PE74Mx3LqOW+Z+Hp5ahL6bQeuHAOYWkESOjeCLgWBEZkV/JFFzA3ocE4ermaXU32kesHl0yI1J3rKcO0LKM+mcc6sIjMOGvHW3FEoYvKQQ5sgQNdu62sLcdzMBEhr5iYbVpRMTALmk7vEIzuYtO/4lUa+4RAmJOURPYqeSJPWfo51jpJL3AztkkkzxUHNzOzF9LsNRg29sro2cyCQQzpiQ718tNwc3YAOkFuPauaxfN3o3uYags4ggtMmCYkAkfFaMoyfDFkpJdBczxtYRIEh9M7NbH7uq1Vjn6ZP10wfAlAfgnNaAHNvEdUgDWdiI/m/We3M2mHXJkDUHtF9ieqEtsYYB+st49dn1urNOi8WIbp77OGpBjafBZuJ5IqNMPpgGLA5WmAeMWhQp8m1CJFOREGIN4nYd8I0Jf0adQE6RY+8Jtt7vktPDmllILvWFMC77FtzoDqTG5cm/C1P5TrRYB/ft7PFQqU3WOR23QO7pg8T4INWMptGrisG+RYGdxGvfGwIfoNSYAkmY0vF/gsstcLhp0BIJdrrGt0nu1HXmbdYxH170RLNKpgqsxkN5A4wJspei1BHUdJgCxvvjunwWTPWAkwTHrHTRQdUiRLp/q3dyBk7NuqwgXaRPCNoQKlCpJ6joG3KY4rPpuu4EugTfXT4KPSne7f47FrNZqDDuIs11+BURhzcQZEWg7lnMxByznOv2fMJMxLoPWdsOxa0A08NSM9YFtjEgiTFgLKxiiC6QCZnYd8/NYfpDrdd3lbcl6W8GC9y1oxfMnQE9x4p6cjUeR3qi7FPGjyBJH34ohrvsTUndBktJO3ctaMXaLoMkGIMWO0QjWtad91ljlCp/Mdb+r6pvTjtdM30KOyAW21CACCQWmZcQYOyLK7RwlR5kuyg6hoAnt48VLCYMN2eM/NadL70V44kuyUsl9D4fBtaIAAVhtAJMR2JzIi2h+ZFYHDaPvtUmMadgRWsbuCRsrFE6VQ7wrTKp7fBBpURwVmnh/u6jKi8bDU6x934Kyxx3HyQGUY+yrFOmfs/soyosgrHcD3wjNI+wEJoO8qbad/8KToomGBG7yCLnEerPh80AM+9FIAJKDZzmI5nUXHM3O07OtMeMoTOatVvq4qqBum3yXUBTb2qvln7E8cPRy45vYlkH0l1USJZVlzHDjfsKbEMqNmcNSdtBbAgzmn1Ttuurc6NqE4goKd9o2qXRyBxDBrhHNgDLlc4xGWB7IjqM/TxM3cJy4KdNrG0aga1oDQY0AsJzStx1Jp2BDqYdsaBNcX2gcro5c86HdIXjCHPaHB1SxGhgMIPeFlYvnFXqO6V+HhwB/EIktBmcomwMmRfUrqqgDSYA8lzuOpguJjU7Lq0McW+iMpSXyYruUqUQaJaZ9dpg6RZpaAAdfmqLX0iQ7pKgIMiAPiKk+EarcNA7B5FAxGCbBt5gKnj+yO/tFI4hpgmrmG5xrz8HR+6g7Esp9amWE7i6rYWsOoxQrUGe7/AOKo1WjYIStNG2T+DWZytrDesb2kCbaku0jdtTNxxacoqN33B012GPNY0cT4lDqUBKCdBcrNoYsglzX05drLgI32Kl6ZUI9Vh/uB7O1YPQnel0Z3ptyZtjGEj1Wz2tMd0KNOuDqwA3JgNMdu5Yrcw2+QTSUNgmw97SCIbOmjR5qBqNBjIP0n5LHcSiNqv3nxKG4aNLK3+W0Wn1XfX7hRys91o8fqqjcY7SfhPipHHP2untWsBadQYPYHn9UzGsvAvqbn5qmcUfuR8FNmNgzlbI2m/jK1oFMM6g0jTz7EvRWDYfH9k38T3sp/pZ/6pji2uMlvgYW4NyTGFZ+a/EfRL+Hs25kM1WHY/wAVOmxpFuk8QilZro6CkPu30VpiZJdZzB2QjtakklZSIZg+7IzB2pJJGViHplWKT4/ZJJRki0WWG1CdqMx1tdPvenSUmiqYQP4+CkKiSSShkx21exSNRJJBoayPS8VIVUklqNY7qvEpnVOKZJZIDZA1lGpWskkmSQtmNi633Cxq7r2PkfJJJdcEc02CaBtIP32IeIdw7CkknJNmRiTGwRw+7FZ1UpJKUzRAyptZ9mUkkiQzYUUe/dqnfR+5SSVVFUTbIPoff7woOpdn32pJJWkZMA6mnbSlJJLqPsMaSiaZSSQaMmQLCllSSQoNijgnDOCZJag2ItCk1o3JJIGP/9k=',
      description: 'lorem epsum',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      id: 20,
      date: '2018-08-16',
      name: 'Jupiter',
      src: 'https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=357&Interlaced=1&Mode=R&ResX=808&OutputFormat=jpg&Quality=80&t=1528468966',
      description: 'lorem epsum',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      description: 'loreum epsum',
      id: 2,
      date: '2018-08-16',
      name: '1.png',
      src: 'https://placeimg.com/200/200/arch',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      description: 'loreum epsum',
      id: 3,
      date: '2018-08-16',
      name: '1.png',
      src: 'https://placeimg.com/200/200/nature',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      description: 'loreum epsum',
      id: 1,
      date: '2018-08-16',
      name: '1.png',
      src: 'http://placeimg.com/200/200/any',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      description: 'loreum epsum',
      id: 4,
      date: '2018-08-16',
      name: '1.png',
      src: 'https://placeimg.com/200/200/people',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      description: 'loreum epsum',
      id: 5,
      date: '2018-08-16',
      name: '1.png',
      src: 'https://placeimg.com/200/200/tech',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      description: 'loreum epsum',
      id: 6,
      date: '2018-08-16',
      name: '1.png',
      src: 'http://placeimg.com/200/200/any',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      description: 'loreum epsum',
      id: 7,
      date: '2018-08-16',
      name: '1.png',
      src: 'https://placeimg.com/200/200/animals',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      description: 'loreum epsum',
      id: 18,
      date: '2018-08-16',
      name: '1.png',
      src: 'https://placeimg.com/200/200/animals',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }, {
      description: 'loreum epsum',
      id: 19,
      date: '2018-08-16',
      name: '1.png',
      src: 'https://placeimg.com/200/200/animals',
      VideoUrl: 'https://youtu.be/YG7Bgxn2Ysw',
      SeriesTitle: 'Series Title',
      EpisodeTitle: 'Episode Title',
      RunTime: '32 minutes'
    }],
    user: {
      id: 'lucas',
      registeredPosts: ['23']
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    loadedPosts (state) {
      return state.loadedPosts.sort((postA, postB) => {
        return postA.date > postB.date
      })
    },
    featuredPosts (state, getters) {
      return getters.loadedPosts.slice(0, 10)
    },
    loadedPost (state) {
      return (postId) => {
        console.log(postId)
        return state.loadedPosts.find((post) => {
          return post.id == postId
        })
      }
    }
  }
})
