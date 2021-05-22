case 'triggered':
				          var imgbb = require('imgbb-uploader')
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					anu = imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                      ano = await getBuffer(`https://api-self.herokuapp.com/api/triggeredwebp?url=${anu.display_url}`)
benny.sendMessage(from, ano, sticker, {quoted: ben})
break
