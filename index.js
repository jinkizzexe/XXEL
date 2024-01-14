/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                                      //
//                                           ＷＨＡＴＳＡＰＰ  -  ＢＯＴ                                        //
//                                                                                                                                           // 
//                                                     Ｖ：１．０．１                                                                  // 
//                                                                                                                                                                                                                                                                       //
//                                                                                                                                                                                                                                                                          //                   
//               ██╗░░██╗░█████╗░███╗░░██╗███╗░░██╗░█████╗░░░░░░░███╗░░░███╗██████╗░              //
//               ██║░██╔╝██╔══██╗████╗░██║████╗░██║██╔══██╗░░░░░░████╗░████║██╔══██╗              //
//               █████═╝░███████║██╔██╗██║██╔██╗██║███████║█████╗██╔████╔██║██║░░██║            //
//               ██╔═██╗░██╔══██║██║╚████║██║╚████║██╔══██║╚════╝██║╚██╔╝██║██║░░██║           //
//               ██║░╚██╗██║░░██║██║░╚███║██║░╚███║██║░░██║░░░░░░██║╚██╔╝██║██║░░██║             //
//               ╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚══╝╚═╝░░╚═╝░░░░░░╚═╝░░░░░╚═╝╚═════╝░              //
//                                                                                                                                                                                                                                                                                                                                    //
//                                                                 @ BY : VENOX-OFFICIAL                                     //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON TEST VERSION!!
*
   * @project_name : Kanna-MD
   * @author : Venox-Official
   * @github: https://github.com/V-E-N-O-X
   * @description : Kanna-MD ,A lightweight multidevice whatsapp userbot .
   * @version 1.0.1
*
   * Licensed under the Apacha 2.0 ;
* 
   * Created By DGXeon
   * Updated By Venox-Official
   * © 2024 Kanna-MD.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
 **/
 
 
const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...🚩')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
