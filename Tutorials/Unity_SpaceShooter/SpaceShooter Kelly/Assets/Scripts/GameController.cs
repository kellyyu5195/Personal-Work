using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class GameController : MonoBehaviour {
	public GameObject hazard;
	public Vector3 spawnValues;
	public int hazardCount;
	public float spawnWait;
	public float startWait;
	public float waveWait;
	int score;
	public Text scoreText;
	public Text restartText;
	public Text GameOverText;

	private bool gameOver;
	private bool restart;

	void Start() {
		gameOver = false;
		restart = false;
		restartText.text = "";
		GameOverText.text = "";
		StartCoroutine (Spawnwaves ());
		score = 0;
		UpdateScore ();
	}

	void Update () {
		if(Input.GetKeyDown (KeyCode.R)) {
			Application.LoadLevel(Application.loadedLevel);
		}
	}
	IEnumerator Spawnwaves () {
		yield return new WaitForSeconds (startWait);
		while (true) {
			for (int i =0; i < hazardCount; i++) {
				Vector3 spawnPosition = new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
				Quaternion spawnRotation = Quaternion.identity;
				Instantiate (hazard, spawnPosition, spawnRotation);
				yield return new WaitForSeconds(spawnWait);
			}
			yield return new WaitForSeconds(waveWait);
			if (gameOver) {
				restartText.text = "Press R to Restart";
				restart = true;
				break;
			}
		}
	}

	public void AddScore (int newScoreValue) {
		score += newScoreValue;
		UpdateScore ();
	}

	public void GameOver () {
		GameOverText.text = "Game Over Lol";
		gameOver = true;
	
	}

	void UpdateScore () {
		scoreText.text = "Score: " + score;
	}
}